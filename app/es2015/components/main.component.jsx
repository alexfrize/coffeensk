import React from "react";
import Cart from "./cart.component.jsx";
import Checkout from "./checkout.component.jsx";
import ShopCoffee from "./shop-coffee.component.jsx";
import Rent from "./rent.component.jsx";
import Repair from "./repair.component.jsx";
import Contacts from "./contacts.component.jsx";

export default class Main extends React.Component {
	render() {
		return (
			<main>
				<Cart />
				<Checkout />
				<ShopCoffee />
				<Rent />
				<Repair />
				<Contacts />
			</main>
		);
	}
}