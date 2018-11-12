import React from "react";
export default class ShopCoffee extends React.Component {
	constructor(props) {
		super(props);
		console.log("ShopCoffee /constructor()");
		console.log("ShopCoffee / this.props", this.props);
		this.state = {shopItems : [], itemsInCart : []};

	}

// =============== Добавляет выбранный товар в корзину ===============
	addItemToCart(i) {
		let newSelectedItem = this.state.shopItems[i];

		let newStateArray = this.state.itemsInCart;
		// Проверяем, есть ли уже такой товар в корзине
		if (newStateArray.filter( el => el === newSelectedItem).length === 0) {
			newSelectedItem.quantity = 1;
			newStateArray.push(newSelectedItem);
		} 
		
		this.setState({itemsInCart : newStateArray});
		this.props.addNewItemToCart(newStateArray);
	}

    componentDidMount() {
			this.getData();
			console.log('shop-coffee.component.jsx  - componentDidMount() props values', this.props); //it will print the props values
		if (this.state.itemsInCart !== this.props.itemsInCart) {
			this.setState({itemsInCart : this.props.itemsInCart});
		}
		
	}

	getData() {
		const url="./data/coffee.json";
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				this.setState({shopItems : data});
			})
		.catch((error) => console.error("Ошибка загрузки данных из файла", url));
		
	}


	render() {
		var itemsArr = [];
		var itemsRow = [];
		var imgPath = "img/coffee/";

		//console.log("this.state.shopItems ===", this.state.shopItems);
		for (let i=0; i < this.state.shopItems.length; i++) {

			let item = this.state.shopItems[i];

			
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
											<p className="shop-coffee__item__price__text">{item.price} руб.</p>
										</div>	
									</div>	
									<div className="row">												
										<div className="shop-coffee__item__image">
											<img alt="Coffee" className="shop-coffee__item__image__img" src={imgPath + item.image} />
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
											<button className="shop-coffee__item__button-container__button" onClick={this.addItemToCart.bind(this, i)}>
												Добавить
											</button>
										</div>
									</div>
								</div>
							</div> 
			);
			
			if ( ((i>0) && (i%3 === 0)) || (i === this.state.shopItems.length-1)) {
				itemsRow.push(
							<div className="row" key={"row"+i}>
								{itemsArr}
							</div>);
				itemsArr = [];

			}

		}
		return (
				<section className="shop-coffee">
 						{this.props.children}
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