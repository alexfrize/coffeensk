import React from "react";
import CheckoutForm from "./checkout-form.component.jsx"

export default class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {itemsInCart : []};
	}
	componentWillReceiveProps(nextProps) {
    	if (nextProps.itemsInCart != this.state.itemsInCart) {
    		this.setState({itemsInCart : nextProps.itemsInCart});
    	}
    }

	render() {
		console.log("Checkout /");
		return(
			<section className="checkout">
				<div className="container">
					<div className="row">
						<div className="checkout__title-container">
							<h2 className="checkout__title-container__title">
								Оформление заказа
							</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<p className="main-text main-text_bold">
								Детали заказа:
							</p>
							<ul className="main-text">
								{this.state.itemsInCart.length ? this.state.itemsInCart.map((item, i) => <li key={i}>{item.title}</li>) : <li>В корзине нет заказов</li>}
							</ul>
						</div>
						<CheckoutForm itemsInCart={this.state.itemsInCart} />										
					</div>
				</div>
			</section>	
		);
	}
}