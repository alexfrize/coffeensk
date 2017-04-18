import React from "react";

export default class Footer extends React.Component {
	render() {
		return (
		<footer>
				<section className="footer__piclinks">
					<div className="container">
						<div className="row">
							<div className="footer__piclinks__item">
								<a className="footer__piclinks__item__inner footer__piclinks__item__inner__service"  href="#">
									<p className="footer__piclinks__item__inner__text">
										Ремонт и обслуживание
									</p>
								</a>
							</div>
							<div className="footer__piclinks__item">
								<a className="footer__piclinks__item__inner footer__piclinks__item__inner__rent" href="#">
									<p className="footer__piclinks__item__inner__text">
										Аренда кофемашин
									</p>						
								</a>
							</div>									
							<div className="footer__piclinks__item">
								<a className="footer__piclinks__item__inner footer__piclinks__item__inner__coffee" href="#">
									<p className="footer__piclinks__item__inner__text">
										Продажа кофе
									</p>						
								</a>
							</div>				
						</div>
					</div>
				</section>		

				<section className="footer__menu-and-contacts">
					<div className="container">
						<div className="row">
							<div className="footer__menu-and-contacts__inner">
								<div className="row">
									<nav className="footer__menu-and-contacts__inner__menu">
										<ul>
											<li><a href="#">О компании</a></li>
											<li><a href="#">Ремонт и обслуживание</a></li>
											<li><a href="#">Аренда кофемашин</a></li>
											<li><a href="#">Запчасти для кофемашин</a></li>
											<li><a href="#">Продажа кофе</a></li>
											<li><a href="#">Наши контакты</a></li>
										</ul>
									</nav>
									<div className="footer__menu-and-contacts__inner__schedule">
										<p className="footer__menu-and-contacts__inner__schedule__text">
											Пн-Чт: 10:00-18:00<br />
											Пт: 10:00- 17:00<br />
											Сб-Вс: выходной
										</p>
									</div>
									<div className="footer__menu-and-contacts__inner__tel-and-address">
										<img className="footer__menu-and-contacts__inner__tel-and-address__logo" src="img/logo.png" />							
										<p className="footer__menu-and-contacts__inner__tel-and-address__tel">тел: 7(383) 375-58-09</p>
										<p className="footer__menu-and-contacts__inner__tel-and-address__addrtext">
											г. Новосибирск
											<span>ул Орджоникидзе 47</span>
										</p>
									</div>
								</div>

							</div>
						</div>
					</div>
				</section>							
			</footer>
		);
	}
}