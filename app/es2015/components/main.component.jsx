import React from "react";
import Header from "./header.component.jsx";
import Footer from "./footer.component.jsx";
import Cart from "./cart.component.jsx";
import Checkout from "./checkout.component.jsx";
import ShopCoffee from "./shop-coffee.component.jsx";
import Rent from "./rent.component.jsx";
import Repair from "./repair.component.jsx";
import Contacts from "./contacts.component.jsx";
import ToCartButton from "./to-cart-button.component.jsx";
import Consumables from "./сonsumables.component.jsx";
import SendMessage from "./send-message.component.jsx";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

export class Main extends React.Component {
	constructor(props) {
		super(props);
		this.addNewItemToCart = this.addNewItemToCart.bind(this);
		this.deleteItemFromCart = this.deleteItemFromCart.bind(this);
		this.changeQantity = this.changeQantity.bind(this);
		this.state = {itemsInCart : []};
	}
	addNewItemToCart(itemsInCart) {
		this.props.dispatch({type : 'ADD_TO_CART',
							 items: itemsInCart});
		this.setState({itemsInCart : itemsInCart});
		console.log("this.state", this.state);
	}

    deleteItemFromCart(i) {
    	var itemToDelete = this.state.itemsInCart[i];
    	console.log("itemToDelete == ", itemToDelete);
    	var itemsLeft = this.state.itemsInCart.filter((x,ind) => ind != i);
    	
		this.props.dispatch({type : 'DELETE_FROM_CART',
							 items: itemsLeft});    	
		console.log("itemsLeft == ", itemsLeft);
    	this.setState({itemsInCart: itemsLeft});

    }

	getItemsInCart(itemsInCart) {
		return itemsInCart;
	}

	changeQantity(i, newQantity) {
		console.log("changeQantity...",i, newQantity);
		var items = this.state.itemsInCart;
		console.log("__this.state.itemsInCart;", this.state.itemsInCart);
		items[i].quantity = newQantity;
		this.props.dispatch({type : 'CHANGE_QUANTITY',
							 items: items});
		this.setState({ itemsInCart : items });
		console.log("ok__");
	}

	render() {
		const ShopCoffeeRoute = (props) => (<ShopCoffee itemsInCart = {this.state.itemsInCart} addNewItemToCart = {this.addNewItemToCart} {...props} />);
		const CartRoute = (props) => (<Cart itemsInCart = {this.state.itemsInCart} deleteItemFromCart = {this.deleteItemFromCart} changeQantity = {this.changeQantity} {...props} />);
		const CheckoutRoute = (props) => (<Checkout itemsInCart = {this.state.itemsInCart} {...props} />);
		return (
			<main>
				<Header />
				<Switch>
					<Route exact path="/" render={ShopCoffeeRoute} />
					<Route path="/rent" component={Rent} />
					<Route path="/repair" component={Repair} />
					<Route path="/consumables" component={Consumables} />
					<Route path="/contacts" component={Contacts} />				
					<Route path="/checkout" render={CheckoutRoute} />
					<Route path="/cart" render={CartRoute} />
					<Route path="/sendmessage" component={SendMessage} />
				</Switch>
				<ToCartButton itemsInCart = {this.state.itemsInCart} />
				<Footer />
			</main>
		);
	}
}

export default connect((store) => store)(Main);