import React from "react";
import { RouteTransition } from 'react-router-transition';

export default class Repair extends React.Component {
	render() {
		console.log("Repair /");
		return(
			<section className="repair-and-service">
				<RouteTransition
					pathname={this.props.location.pathname}
					atEnter={{ translateY: 100 }}
					atLeave={{ translateY: -100 }}
					atActive={{ translateY: 0 }}
					mapStyles={styles => ({ transform: `translateY(${styles.translateY}%)` })}> {this.props.children}

					<div className="container">
						<div className="row">
							<div className="repair-and-service__title-container">
								<h2 className="repair-and-service__title-container__title">
									Ремонт и обслуживание
								</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="main-text">
									<span className="main-text_bold">Наши преимущества:</span>
									<ul className="main-text">
										<li>Мы ремонтируем ВСЕ марки кофемашин</li>
										<li>Выезд мастера-приемщика бесплатно</li>
										<li>Мы осуществляем ремонт в кратчайшие сроки</li>
										<li>Применяем оригинальные запчасти</li>
										<li>Чиним на месте</li>
										<li>Если на месте ремонт не возможен мы бесплатно доставляем кофемашину в сервис и исправную доставляем Вам</li>
										<li>Мы заранее согласовываем время и стоимость ремонта</li>
									</ul>
								</div>

								<table className="main-table">
									<tbody>
										<tr>
											<th colSpan="2">Стоимость видов работ для зерновых кофемашин</th>
										</tr>
										<tr>
											<td>Выезд мастера-приемщика по городу</td>
											<td>Бесплатно</td>
										</tr>
										<tr>
											<td>Диагностика</td>
											<td>Бесплатно</td>
										</tr>
										<tr>
											<td>Ремонт механических частей или их замена</td>
											<td>1000-1500 руб.</td>
										</tr>									
										<tr>
											<td>Ремонт электрических цепей, датчиков</td>
											<td>1700-2400 руб.</td>
										</tr>	
										<tr>
											<td>Ремонт управляющих плат</td>
											<td>от 2700 руб.</td>
										</tr>
										<tr>
											<td>ЗИП (запасные инженерные принадлежности)</td>
											<td>По договоренности</td>
										</tr>
										<tr>
											<td>Доставка до/из СЦ (при ремонте)</td>
											<td>Бесплатно</td>
										</tr>	
										<tr>
											<td>Экспертное заключение (диагностика)</td>
											<td>800 руб.</td>
										</tr>
										<tr>
											<td>Ремонт мультиварки</td>
											<td>800 руб.</td>
										</tr>								
									</tbody>
								</table>

								<table className="main-table">
					
									<tbody>
										<tr>
											<th colSpan="2">Стоимость отдельных видов работ</th>
										</tr>
										<tr>
											<td>Декальцинация</td>
											<td>1500 руб.</td>
										</tr>
										<tr>
											<td>Очистка от кофейных масел</td>
											<td>800 руб.</td>
										</tr>
										<tr>
											<td>Техническое обслуживание</td>
											<td>1500 руб.</td>
										</tr>									
										<tr>
											<td>Дезинфекция кофемашины</td>
											<td>2500 руб.</td>
										</tr>	
									</tbody>
								</table>

								<p className="main-text">
									Обратите внимание на то, что некоторые кофемашины требуют разборки и сборки только в условиях сервисного центра. Поэтому наш
									курьер может забрать Вашу неисправную кофемашину в наш сервисный центр, и после ремонта доставить её к Вам домой или в офис.
								</p>
								<p className="main-text">
									Подробности Вы можете узнать по телефону 8 (383) 375-58-09.
								</p>
								<p className="main-text">
									Также Вы можете посмотреть фото стандартных неисправностей.
								</p>
								<br />
								<p className="main-text main-text_bold">	 
									ВНИМАНИЕ!
								</p>
								<p className="main-text">
									С момента уведомления заказчика об окончании ремонта хранение кофемашин осуществляется бесплатно в течение одного
									календарного месяца, а при отказе от ремонта после диагностики хранение кофемашин осуществляется бесплатно в течение двух
									недель, по истечении указанных сроков бесплатного хранения дальнейшее хранение осуществляется платно.
								</p>
								<p className="main-text">
									Стоимость платного хранения 1000 рублей в месяц.
								</p>
								
								<p className="main-text main-text_bold">	 
									Доставка кофемашин в сервис-центр (из сервис-центра)
								</p>
								<p className="main-text">
									Доставка кофемашин в сервис и из сервиса (при ремонте) по городу бесплатна*, в удобное для вас время.
								</p>
								<p className="main-text">
									Доставка кофемашин в случае отказа от их ремонта, а также доставка капсульных кофемашин и кофеварок осуществляется по желанию заказчика за отдельную плату.
								</p>
								<p className="main-text main-text_small">
									* Условия бесплатной доставки действительны только для зерновых автоматических и полуавтоматических кофемашин при их ремонте в пределах г. Новосибирска.
								</p>						
							</div>
						</div>
					</div>
				</RouteTransition>
			</section>
		);
	}
}