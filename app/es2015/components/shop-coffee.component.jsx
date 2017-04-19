import React from "react";

export default class ShopCoffee extends React.Component {
	constructor() {
		super();
		console.log("ShopCoffee /constructor()");
		this.state = {shopItems : []};
		console.log("---",this.state.shopItems);

	}


	getData() {
		const url="http://localhost:3000/data/coffee.json";
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				console.log("data",data);
				this.state.shopItems = data;
				console.log("this.state.shopItems --",this.state.shopItems);
				
			})
		.catch((error) => console.error("Ошибка загрузки данных из файла", url));
		
	}


	componentWillMount() {
		this.getData();
	}
	 componentDidMount() {
        setInterval(() => this.setState(this.state), 1000);
    }

	render() {
		var itemsArr = [];
		var itemsRow = [];

		console.log("this.state.shopItems ===", this.state.shopItems);
		for (let i=0; i < this.state.shopItems.length; i++) {

			let item = this.state.shopItems[i];
			console.log("===== item =====", item);
			console.log("this.state.shopItems.length==", this.state.shopItems.length);
			
			itemsArr.push(
							<div className="shop-coffee__item" key={"item"+i}> 
								<div className="shop-coffee__item__inner">
									<div className="row">
										<div className="shop-coffee__item__kg">
											<p className="shop-coffee__item__kg__text">{item.weight}</p>
										</div>
										<div className="shop-coffee__item__space">
										</div>
										<div className="shop-coffee__item__price">
											<p className="shop-coffee__item__price__text">{item.price}</p>
										</div>	
									</div>	
									<div className="row">												
										<div className="shop-coffee__item__image">
											<img className="shop-coffee__item__image__img" src="img/template-img__coffee-shop.jpg" />
										</div>
									</div>
									<div className="row">
										<div className="shop-coffee__item__description">
											<p className="shop-coffee__item__description__text">
												{item.title}
											</p>
											<p className="shop-coffee__item__description__text">
												{item.description}
											</p>
										</div>
									</div>
									<div className="row">
										<div className="shop-coffee__item__button-container">
											<button className="shop-coffee__item__button-container__button">
												Заказать
											</button>
										</div>
									</div>
								</div>
							</div> 
			);
			
			if ( ((i>0) && (i%3 == 0)) || (i == this.state.shopItems.length-1)) {
				itemsRow.push(
							<div className="row" key={"row"+i}>
								{itemsArr}
							</div>);
				itemsArr = [];

			}

		}
		return (
				<section className="shop-coffee">
					<div className="container">
						<div className="row">
							<div className="shop-coffee__title-container">
								<h2 className="shop-coffee__title-container__title">
									Магазин кофе
								</h2>
							</div>
						</div>

				
							{itemsRow}

						
					</div>
				</section>
		);
	}
}