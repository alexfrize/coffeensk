import React from "react";

export default class Repair extends React.Component {
	constructor(props) {
		super(props);
		this.state = {typesOfWork : {
			title : "",
			types : []
		}};
	}

	componentDidMount() {
		const url = "./data/types-of-work.json";
		fetch(url)
		.then((resp) => resp.json())
		.then((data) => {
			this.setState({typesOfWork : data});
		})
	.catch((error) => console.error("Ошибка загрузки данных из файла", url));
	}

	getTypesOfWork() {
		return (
			this.state.typesOfWork.types.map((item, i) => (
				<tr key={i}>
					<td>{item.name}</td>
					<td>{item.price}</td>
				</tr>
			))
		);
	}

	render() {
		console.log("Repair /");
		return(
			<section className="repair-and-service">

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
											<th colSpan="2">{this.state.typesOfWork.title}</th>
										</tr>
										{this.getTypesOfWork()}
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
			</section>
		);
	}
}