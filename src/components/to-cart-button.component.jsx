import React from 'react';
import { Link } from "react-router-dom";
import "./to-cart-button.component.scss";

const ToCartButton = (props) => {
	return (
		<Link to="/cart">
		<section className="to-cart-button">
			<div className="to-cart-button__text-container">
				<p className="to-cart-button__text-container__text">
					{props.itemsInCart.length}
				</p>
			</div>
		</section>
		</Link>
	);
};

export default ToCartButton;