import React from "react";

export default class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {itemsInCart : []};
		//this.deleteItemFromCart = this.props.deleteItemFromCart.bind(this);
	}

    componentWillReceiveProps(nextProps) {
    	if (nextProps.itemsInCart != this.state.itemsInCart) {
    		this.setState({itemsInCart : nextProps.itemsInCart});
    	}
    }

    deleteItemFromCart(i) {
    	var itemsLeft = this.state.itemsInCart.filter((x,ind) => ind != i);
    	this.props.deleteItemFromCart(i);
    	console.log("itemsLeft === ", itemsLeft);
    	this.setState({itemsInCart : itemsLeft});
    }

	test() {
		console.log('Next >>');
	}
	render() {
		console.log("Cart /");
		var itemsInTable;

		var itemsInCart = this.state.itemsInCart;
		var totalPrice = 0;

		if (!itemsInCart.length) {
			itemsInTable = 	(<tr>
								<td colSpan="5">Ваша корзина пуста</td>
							</tr>);
		} 
		else {
			totalPrice = 0;
			itemsInTable = (itemsInCart.map((item, i) => {
								totalPrice += +item.price;
								console.log("totalPrice==",totalPrice);
								return (
									<tr key={i}>
										<td>{item.title}</td>
										<td><img src="img/template-img__coffee-shop_cart.jpg" /></td>
										<td>1 шт.</td>
										<td>{item.price} руб.</td>
										<td><button className="cart__table__delete-button" onClick={this.deleteItemFromCart.bind(this, i)}><i className="fa fa-times"></i></button></td>
									</tr>);
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
								<button className="cart__next-button" onClick={this.test}>Далее >></button>
							</div>
						</div>				
					</div>
				</div>
			</section>
		);
	}
}