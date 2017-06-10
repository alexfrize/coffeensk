var gulp = require('gulp');
var sass = require('gulp-sass');
var babelify = require('babelify');
var browserify = require('browserify')
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './app/'
		},
		notify: false,
		startPath: 'index.html'
	});
});

gulp.task('sass', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(sass({precision: 10})).on('error',sass.logError)
	.pipe(postcss([ autoprefixer() ]))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('babel', () => {
	browserify('app/es2015/app.jsx')
	.transform('babelify', {
		presets: ['es2015']
	})
	.bundle()	
	.pipe(source('app.js'))
	.pipe(buffer())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'babel', 'browser-sync'], function() {
	gulp.watch('app/scss/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/es2015/*.jsx',  ['babel']);
	gulp.watch('app/es2015/components/*.jsx',  ['babel']);
});

gulp.task('optimize', ['sass', 'babel', 'watch'], function (cb) {
	process.env.NODE_ENV = 'production';
	
	pump([
        gulp.src('app/js/app.js'),
        uglify(),
        gulp.dest('app/optimized')
    ],
    cb
  	);
  	
});