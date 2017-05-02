import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/main.component.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";

var app = document.getElementById("app");

function mainAppReducer(state, action) {
	if (!state) return {
		items: []
	}
	switch (action.type) {
		case 'ADD_TO_CART' : console.log('ADD_TO_CART');
		console.log("action.items == ", action.items);
		console.log("state==",state);
		return Object.assign({}, action.items); // state уже содержит все данные об объектах в корзине, поэтому ничего не добавляем
		
		case 'DELETE_FROM_CART' : console.log('DELETE_FROM_CART');
		console.log("action.items == ", action.items);
		console.log("state==",state);
		return Object.assign({}, action.items); // state уже содержит все данные об объектах в корзине, поэтому ничего не добавляем		
	}
}
const store = createStore(mainAppReducer);

console.log("store.getState() == ", store.getState());

var render = () => ReactDOM.render(<Provider store={store}><Main /></Provider>, app);
store.subscribe(render);
render();

console.log("store.getState() == ", store.getState());

