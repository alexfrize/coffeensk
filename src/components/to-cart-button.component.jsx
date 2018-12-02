import React from 'react';
import { Link } from "react-router-dom";
import "./to-cart-button.component.scss";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ToCartButton extends React.Component {
	state = {
		itemsInCart: []
	}
	prevItemsCount = 0;

	constructor(props) {
		super(props);
	}

	static getDerivedStateFromProps(newProps, prevState) {
		return newProps
	}

	getItemsInCart() {
		let itemCount;
		if (this.props.itemsInCart.length) {
			itemCount = this.props.itemsInCart.map(el => el.quantity).reduce((prev, current) => prev+current);
		} else {
			itemCount = 0;
		}
		return itemCount;
	}

	render() {
		console.log('isComponentAnimated',this.state);
		return (
			<Link to="/cart">
				<section className="to-cart-button">
					<ReactCSSTransitionGroup 
						transitionName="animate-counter"
						transitionEnterTimeout={200}
						transitionLeaveTimeout={200}>
						<div className="to-cart-button__text-container"  key={this.getItemsInCart()}>
							<p className="to-cart-button__text-container__text">
								{this.getItemsInCart()}
							</p>
						</div>
						</ReactCSSTransitionGroup>
				</section>
			</Link>
		);
	}
}

export default ToCartButton;