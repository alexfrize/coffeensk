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
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

export class Main extends React.Component {
	constructor(props) {
		super(props);
		this.addNewItemToCart = this.addNewItemToCart.bind(this);
		this.deleteItemFromCart = this.deleteItemFromCart.bind(this);
		this.state = {itemsInCart : []};
	}
	addNewItemToCart(itemsInCart) {
		//console.log("addNewItemToCart() :: itemData == ", itemsInCart);		
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
		//console.log("getItemsInCart() :: itemData == ", itemsInCart);
		return itemsInCart;
	}

	render() {
		//console.log('(from render) this.props == ', this.props);
		//console.log('dispatch==', this.props.dispatch);
		
		const ShopCoffeeRoute = (props) => (<ShopCoffee itemsInCart = {this.state.itemsInCart} addNewItemToCart = {this.addNewItemToCart} {...props} />);
		const CartRoute = (props) => (<Cart itemsInCart = {this.state.itemsInCart} deleteItemFromCart = {this.deleteItemFromCart} {...props} />);
		const CheckoutRoute = (props) => (<Checkout itemsInCart = {this.state.itemsInCart} {...props} />);
		return (
			<main>
				<Header />
				<Switch>
					<Route path="/rent" component={Rent} />
					<Route path="/repair" component={Repair} />
					<Route path="/contacts" component={Contacts} />				
					<Route path="/shopcoffee" render={ShopCoffeeRoute} />
					<Route path="/checkout" render={CheckoutRoute} />
					<Route path="/cart" render={CartRoute} />
				</Switch>
				<Cart itemsInCart = {this.state.itemsInCart} deleteItemFromCart = {this.deleteItemFromCart} />);
				<ToCartButton itemsInCart = {this.state.itemsInCart} />
				<Footer />
			</main>
		);
	}
}

export default connect((store) => store)(Main);