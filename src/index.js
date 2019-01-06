import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main.component.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { mainAppReducer } from './reducers';

import '../src/scss/style.scss';

var App = document.getElementById('app');

const store = createStore(mainAppReducer, composeWithDevTools());
var render = () =>
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" component={Main} />
      </Provider>
    </BrowserRouter>,
    App
  );
store.subscribe(render);
render();
