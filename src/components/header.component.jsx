import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';

export default class Header extends React.Component {
	render() {
		return (
				<header className="header">
					<div className="container">
						<div className="row">
							<div className="header__logo col-md-3">
								<Link to="/"><img alt="logo" src={logo} className="header__logo__img" /></Link>
							</div>
							<div className="header__title col-md-6">
								<h1 className="header__title__h1">
									Аренда и ремонт кофемашин
								</h1>
							</div>
							<div className="header__contacts col-md-3">
								<div className="header__contacts__address">
									<p className="header__contacts__address__text">
										г. Новосибирск<br /> 
										Орджоникидзе, 47
									</p>
								</div>
								<div className="header__contacts__phone">
									<a href="tel:+73833755809" className="header__contacts__phone__text">
										тел: 7 (383) 375-58-09
									</a>
								</div>
							</div>
						</div>
						
						<div className="row">
							<nav className="header__menu">
								<div className="navbar-header">
							      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".header__menu__list">
							        <span className="icon-bar"></span>
							        <span className="icon-bar"></span>
							        <span className="icon-bar"></span>                        
							      </button>
							    </div>
							    <div className="header__menu__list collapse navbar-collapse">
									<ul className="nav nav-pills nav-justified">
										<li><Link to="/">Кофе</Link></li>
										<li><Link to="/repair">Ремонт и обслуживание</Link></li>
										<li><Link to="/сonsumables">Расходные материалы</Link></li>
										<li><Link to="/rent">Аренда кофемашины</Link></li>
										<li><Link to="/contacts">Контакты</Link></li>
									</ul>
								</div>
							</nav>
						</div>
						<div className="row">
							<div className="header__banner">
								<div className="header__banner__text-container">
									<p className="header__banner__text">
										Есть вопросы или предложения?<br />
										Звоните НАМ: 7 (383) 375-58-09
									</p>
								</div>
							</div>
						</div>
					</div>
				</header>
			);
	}
}