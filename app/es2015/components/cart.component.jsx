import React from "react";
export default class Cart extends React.Component {
	render() {
		console.log("Cart /");
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
										<th colSpan="4">Список товаров</th>
									</tr>							
									<tr>
										<td>Выезд мастера-приемщика по городу</td>
										<td><img src="img/template-img__coffee-shop_cart.jpg" /></td>
										<td>2 шт.</td>
										<td>1500 руб.</td>
									</tr>
									<tr>
										<td>Выезд мастера-приемщика по городу</td>
										<td><img src="img/template-img__coffee-shop_cart.jpg" /></td>
										<td>2 шт.</td>
										<td>1500 руб.</td>
									</tr>
									<tr>
										<td>Выезд мастера-приемщика по городу</td>
										<td><img src="img/template-img__coffee-shop_cart.jpg" /></td>
										<td>2 шт.</td>
										<td>1500 руб.</td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td>Итого:</td>
										<td>4500 руб.</td>
									</tr>									
								</tbody>
							</table>
							<div className="cart__next-button-container">
								<button className="cart__next-button">Далее >></button>
							</div>
						</div>				
					</div>
				</div>
			</section>
		);
	}
}