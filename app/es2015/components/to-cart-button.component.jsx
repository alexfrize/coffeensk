import React from 'react';
import { Link } from "react-router-dom";

export default class ToCartButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Link to="/cart">
			<section className="to-cart-button">
				<div className="to-cart-button__text-container">
					<p className="to-cart-button__text-container__text">
						{this.props.itemsInCart.length}
					</p>
				</div>
			</section>
			</Link>
		);
	}
}