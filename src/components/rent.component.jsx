import React from "react";
import "./rent.component.scss";

const Rent = () => {
	console.log("Rent /");
	return (
		<section className="rent-coffee-machine">
			<div className="container">
				<div className="row">
					<div className="rent-coffee-machine__title-container">
						<h2 className="rent-coffee-machine__title-container__title">
							Аренда кофемашин
						</h2>
					</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<p className="main-text">
								Предлагаем Вашему вниманию услугу по аренде кофемашин.
							</p>
	 						<p className="main-text">
  							Нет необходимости копить деньги, брать кредит или складываться всем офисом на покупку новой кофемашины.
     						Вы можете просто позвонить нам и мы предоставим Вам в аренду кофемашину за небольшую месячную плату.
     						Сервисное обслуживание и ремонт при этом мы возьмем на себя.
     					</p>
         			<p className="main-text">
								Стоимость аренды автоматической кофемашины составляет от 1500 до 2500 рублей в месяц. Подробности вы можете уточнить у наших менеджеров.
							</p>
							<p className="main-text">
    						А что делать, если Вам нужны другие условия аренды кофемашины в Новосибирске или другом городе?
    					</p>
    					<p className="main-text">
								Просто позвоните нам, и мы найдем для Вас специальное предложение.
							</p>
						</div>
					</div>
				</div>
		</section>
	);
}

export default Rent;
