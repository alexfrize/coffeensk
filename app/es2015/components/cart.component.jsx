import React from "react";
import { Link } from "react-router-dom";
import { RouteTransition } from 'react-router-transition';

export default class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {itemsInCart : []};
	}

    deleteItemFromCart(i) {
    	var itemsLeft = this.state.itemsInCart.filter((x,ind) => ind != i);
    	this.props.deleteItemFromCart(i);
    	console.log("itemsLeft === ", itemsLeft);
    	this.setState({itemsInCart : itemsLeft});
    }

    componentDidMount() {
		console.log('cart.component.jsx - componentDidMount()', this.props);
		if (this.state.itemsInCart != this.props.itemsInCart) {
			this.setState({itemsInCart : this.props.itemsInCart});
		}
	}

	render() {

		console.log("Cart /");
		console.log("this.props == ",this.props);
		var imgPath = "img/coffee/"
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
										<td><img src={imgPath + item.image} /></td>
										<td>1 шт.</td>
										<td>{item.price} руб.</td>
										<td><button className="cart__table__delete-button" onClick={this.deleteItemFromCart.bind(this, i)}><i className="fa fa-times"></i></button></td>
									</tr>);
				}));
		}

		return (

			<section className="cart">
				<RouteTransition
					pathname={this.props.location.pathname}
					atEnter={{ translateY: 100 }}
					atLeave={{ translateY: -100 }}
					atActive={{ translateY: 0 }}
					mapStyles={styles => ({ transform: `translateY(${styles.translateY}%)` })}> {this.props.children}
			  
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
									<Link to="/checkout"><button className="cart__next-button">Далее >></button></Link>
								</div>
							</div>				
						</div>
					</div>
				</RouteTransition>
			</section>
		);
	}
}