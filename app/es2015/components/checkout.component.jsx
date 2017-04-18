import React from "react";

export default class Checkout extends React.Component {
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
								<li>Alta Roma Espresso Арабика-70%, Робуста-30% - 1 шт.</li>
								<li>Espresso Alta Арабика-75%, Робуста-25% - 2 шт.</li>
							</ul>
						</div>
						<div className="col-md-6">
							<p className="main-text main-text_bold">
								Пожалуйста, заполните форму
							</p>
							<form className="checkout__form">
								<input type="input" className="checkout__form__input" placeholder="Ваше имя" />
								<input type="input" className="checkout__form__input" placeholder="Телефон" />
								<input type="input" className="checkout__form__input" placeholder="Адрес" />
								<div className="checkout__checkout-button-container">
									<button className="checkout__checkout-button">Оформить заказ</button>
								</div>
							</form>

						</div>												
					</div>
				</div>
			</section>	
		);
	}
}