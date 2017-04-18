import React from "react";

export default class Contacts extends React.Component {
	render() {
		console.log("Contacts /");
		return (
			<section className="contacts-and-map">
				<div className="container">
					<div className="row">
						<div className="contacts-and-map__title-container">
							<h2 className="contacts-and-map__title-container__title">
								Наши контакты
							</h2>
						</div>
					</div>
					<div className="row">
						<div className="contacts-and-map__contacts">
							<p className="main-text">
								630099, г. Новосибирск,<br />
								ул. Орджоникидзе,<br />
								д. 47 цоколь, офис 9.
							</p>
							<p className="main-text">	 
								<span className="main-text_bold">Время работы:</span><br />
								Пн-Пт: 10:00-18:00<br />
								Сб: по договоренности<br />
								Вс: выходной
							</p>
							<p className="main-text">
								тел: +7(383)-375-58-09<br />
								e-mail: info@coffeensk.com
							</p>
							<div className="main-button-container">
								<button className="main-button">Оставить заявку</button>
							</div>						
						</div>
						<div className="contacts-and-map__map">
							   <div id="map"></div>
						</div>
					</div>
					<div className="row">
						<div className="contacts-and-map__title-container">
							<h2 className="contacts-and-map__title-container__title">
								О нашем сервис-центре
							</h2>
						</div>
					</div>				
					<div className="row">
						<div className="col-md-12">
							<p className="main-text">
								Наш сервисный центр является одним из ведущих сервисных центров в области ремонта и обслуживания кофемашин таких известных производителей как  Delonghi, Bosch, Saeco, Nivona, Mielita, Krups, Siemens, Gaggia, Solis, Jura, Spidem и др.,  а также по поставке комплектующих к ним на территории Новосибирской области. Услуги по диагностике и ремонту осуществляются с выезда инженера на место ремонта.
							</p>
							 <p className="main-text">
								Зачастую, причинами поломок кофемашин являются следующие факторы:
							</p>
							<ul className="main-text">
								<li>механические повреждения корпуса или трущихся деталей, например, попадания твердых загрязнений в кофемолку или неисправность заварного устройства;</li>
								<li>электрические неисправности платы управления или датчиков кофемашины, например, неисправность ТЭН или магнитного датчика закрытия крышки;</li>
								<li>всевозможные протечки шлангов и прокладок, которые могут рассохнуться или повредится, особенно, если вовремя не проводить декальцинацию кофемашины.</li>
							</ul>
							 <p className="main-text">
								Сервисное обслуживание, проводимое нашей компанией, призвано для того, чтобы вовремя проводить очистку от кофейных масел и декальцинацию кофемашины, тем самым снизив не только вероятность поломки, улучшить качество приготовляемых напитков, но даже  снизить энергопотребление.  
							</p>
							<p className="main-text">
								Проводя сервисное обслуживание, инженер нашей компании отслеживает состояние кофемашины и может предупредить поломки, чтобы ваше утро всегда начиналось с чашечки Вашего любимого кофе.
							</p>
						
						</div>
					</div>
				</div>
			</section>
		);
	}
}