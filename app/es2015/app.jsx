import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/main.component.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";

var app = document.getElementById("app");

function mainAppReducer(state, action) {
	if (!state) return {
		items: []
	}
	switch (action.type) {
		case 'ADD_TO_CART' : console.log('ADD_TO_CART');
					return Object.assign({}, action.items); // state уже содержит все данные об объектах в корзине, поэтому ничего не добавляем

		case 'DELETE_FROM_CART' : console.log('DELETE_FROM_CART');
					return Object.assign({}, action.items); // state уже содержит все данные об объектах в корзине, поэтому ничего не добавляем		
		case 'CHANGE_QUANTITY' : console.log('CHANGE_QUANTITY');
					return Object.assign({}, action.items); // state уже содержит все данные об объектах в корзине, поэтому ничего не добавляем
	}
}
const store = createStore(mainAppReducer);
var render = () => ReactDOM.render(
							<HashRouter>
								<Provider store={store}>
									<Route path="/" component = {Main} />
								</Provider>
							</HashRouter>
						, app);
store.subscribe(render);
render();

