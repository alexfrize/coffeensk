import React from 'react';
import { action__addToCart } from '../actions';
import { connect } from 'react-redux';
import './shop-coffee.component.scss';

class ShopCoffee extends React.Component {
  state = {
    shopItems: [],
    itemsInCart: []
  };

  constructor(props) {
    super(props);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  // =============== Добавляет выбранный товар в корзину ===============
  addItemToCart(i) {
    this.props.action__addToCart(this.state.shopItems[i]);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const url = './data/coffee.json';
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ shopItems: data });
      })
      .catch(error => console.error('Ошибка загрузки данных из файла', url));
  }

  render() {
    let itemsArr = [];
    let itemsRow = [];
    let imgPath = 'img/coffee/';

    for (let i = 0; i < this.state.shopItems.length; i++) {
      let item = this.state.shopItems[i];
      itemsArr.push(
        <div className="shop-coffee__item" key={'item' + i}>
          <div className="shop-coffee__item__inner">
            <div className="row">
              <div className="shop-coffee__item__kg">
                <p className="shop-coffee__item__kg__text">{item.weight}</p>
              </div>
              <div className="shop-coffee__item__space" />
              <div className="shop-coffee__item__price">
                <p className="shop-coffee__item__price__text">
                  {item.price} руб.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="shop-coffee__item__image">
                <img
                  alt="Coffee"
                  className="shop-coffee__item__image__img"
                  src={imgPath + item.image}
                />
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
                <button
                  className="shop-coffee__item__button-container__button"
                  onClick={() => this.addItemToCart(i)}
                >
                  Добавить
                </button>
              </div>
            </div>
          </div>
        </div>
      );

      if ((i > 0 && i % 3 === 0) || i === this.state.shopItems.length - 1) {
        itemsRow.push(
          <div className="row" key={'row' + i}>
            {itemsArr}
          </div>
        );
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

export default connect(
  null,
  {
    action__addToCart
  }
)(ShopCoffee);
