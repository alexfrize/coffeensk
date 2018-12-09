import React from "react";
import { Link } from "react-router-dom";
import "./cart.component.scss";

export default class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {itemsInCart : []};
		this.canCheckout = false;
		this.increaseQuantity = this.increaseQuantity.bind(this);
		this.decreaseQuantity = this.decreaseQuantity.bind(this);
		this.deleteItemFromCart = this.deleteItemFromCart.bind(this);
	}

	deleteItemFromCart(i) {
  	var itemsLeft = this.state.itemsInCart.filter((x,ind) => ind !== i);
   	this.props.deleteItemFromCart(i);
   	console.log("itemsLeft === ", itemsLeft);
   	this.setState({itemsInCart : itemsLeft});
  }

  componentDidMount() {
		if (this.state.itemsInCart !== this.props.itemsInCart) {
			this.setState({itemsInCart : this.props.itemsInCart});
		}
	}

	handleInput(i, event) {
		let inputData = event.target.value;
		inputData = inputData.replace(/[^0-9]+/gi, '');

		if (inputData !== '') {
			inputData = Number(inputData);
			if (inputData !== 0 && inputData <= 99) {
				this.props.changeQantity(i, inputData);
			}
		}
	}

	increaseQuantity(i) {
		var newQuantity = Number(this.state.itemsInCart[i].quantity) + 1;
		if (newQuantity <= 99) {
			this.props.changeQantity(i, newQuantity);
		}
	}

	decreaseQuantity(i) {
		var newQuantity = Number(this.state.itemsInCart[i].quantity) - 1;
		if (newQuantity <= 0) newQuantity = 1;
		this.props.changeQantity(i, newQuantity);
	}	

	render() {

		console.log("Cart /");
		console.log("this.props == ",this.props);
		var imgPath = "img/coffee/"
		var itemsInTable;

		var itemsInCart = this.state.itemsInCart;
		var totalPrice = 0;

		if (!itemsInCart.length) {
			this.canCheckout = false;
			itemsInTable = (
				<tr>
					<td colSpan="5">Ваша корзина пуста</td>
				</tr>
			);
		} else {
				totalPrice = 0;
				this.canCheckout = true;
				itemsInTable = (itemsInCart.map((item, i) => {
					totalPrice += +item.price*item.quantity;
					return (
						<tr key={i}>
							<td>{item.title}</td>
							<td><img alt="Item" src={imgPath + item.image} /></td>
							<td>
								<input onChange={this.handleInput.bind(this, i)} className="cart__table__input" type="number" value={this.state.itemsInCart[i].quantity} />
								<button className="cart__table__button-add" onClick={() => this.increaseQuantity(i)}>+</button>
								<button className="cart__table__button-sub" onClick={() => this.decreaseQuantity(i)}>-</button>
							</td>
							<td>{item.price * this.state.itemsInCart[i].quantity} руб.</td>
							<td><button className="cart__table__delete-button" onClick={() => this.deleteItemFromCart(i)}><i className="fa fa-times"></i></button></td>
						</tr>
					);
				}));
		}
		return (

			<section className="cart">
		  
					<div className="container">
						<div className="row">
							<div className="cart__title-container">
								<h2 className="cart__title-container__title">
									Ваша корзина
								</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<table className="cart__table">

									<tbody>
										<tr>
											<th colSpan="5">Список товаров</th>
										</tr>							
										{itemsInTable}	
										<tr>
											<td></td>
											<td></td>
											<td>Итого:</td>
											<td>{totalPrice} руб.</td>
											<td></td>
										</tr>																	
									</tbody>
								</table>
								<div className="cart__next-button-container">
									<Link to="/checkout"><button disabled={!this.canCheckout} className="cart__next-button">Далее >></button></Link>
								</div>
							</div>				
						</div>
					</div>

			</section>
		);
	}
}