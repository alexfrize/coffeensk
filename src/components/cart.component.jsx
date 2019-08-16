import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { action__changeQantity, action__deleteItemFromCart } from '../actions';
import './cart.component.scss';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.canCheckout = false;
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.deleteItemFromCart = this.deleteItemFromCart.bind(this);
  }

  deleteItemFromCart(i) {
    this.props.action__deleteItemFromCart(i);
  }

  handleInput(i, event) {
    let inputData = event.target.value;
    inputData = inputData.replace(/[^0-9]+/gi, '');

    if (inputData !== '') {
      inputData = Number(inputData);
      if (inputData !== 0 && inputData <= 99) {
        this.props.action__changeQantity(i, inputData);
      }
    }
  }

  increaseQuantity(i) {
    let newQuantity = Number(this.props.itemsInCart[i].quantity) + 1;

    if (newQuantity <= 99) {
      this.props.action__changeQantity(i, newQuantity);
    }
  }

  decreaseQuantity(i) {
    let newQuantity = Number(this.props.itemsInCart[i].quantity) - 1;

    if (newQuantity <= 0) newQuantity = 1;
    this.props.action__changeQantity(i, newQuantity);
  }

  checkPromo(item) {
    switch (item.promotionType) {
      case '6+1': {
        if (Number(item.quantity) >= Number(item.promotionFrom)) {
          return (
            <span>
              Акция: 6+1
              <br />+
              {Math.floor(
                Number(item.quantity) / Number(item.promotionFrom)
              )}{' '}
              бесплатно
            </span>
          );
        }
      }
      default:
        return '';
    }
  }

  render() {
    var imgPath = 'img/coffee/';
    var itemsInTable;

    var itemsInCart = this.props.itemsInCart;
    var totalPrice = 0;

    if (!itemsInCart.length) {
      this.canCheckout = false;
      itemsInTable = (
        <tr>
          <td colSpan="6">Ваша корзина пуста</td>
        </tr>
      );
    } else {
      totalPrice = 0;
      this.canCheckout = true;
      itemsInTable = itemsInCart.map((item, i) => {
        console.log('item', item);
        totalPrice += Number(item.price) * item.quantity;
        return (
          <tr key={i}>
            <td>{item.title}</td>
            <td>
              <img alt="Item" src={imgPath + item.image} />
            </td>
            <td>
              <input
                onChange={this.handleInput.bind(this, i)}
                className="cart__table__input"
                type="number"
                value={this.props.itemsInCart[i].quantity}
              />
              <button
                className="cart__table__button-add"
                onClick={() => this.increaseQuantity(i)}
              >
                +
              </button>
              <button
                className="cart__table__button-sub"
                onClick={() => this.decreaseQuantity(i)}
              >
                -
              </button>
            </td>
            <td>{this.checkPromo(item)}</td>
            <td>{item.price * this.props.itemsInCart[i].quantity} руб.</td>

            <td>
              <button
                className="cart__table__delete-button"
                onClick={() => this.deleteItemFromCart(i)}
              >
                <i className="fa fa-times" />
              </button>
            </td>
          </tr>
        );
      });
    }
    return (
      <section className="cart">
        <div className="container">
          <div className="row">
            <div className="cart__title-container">
              <h2 className="cart__title-container__title">Ваша корзина</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <table className="cart__table">
                <tbody>
                  <tr>
                    <th colSpan="6">Список товаров</th>
                  </tr>
                  {itemsInTable}
                  <tr>
                    <td colSpan="3" />

                    <td>Итого:</td>
                    <td>{totalPrice} руб.</td>
                    <td />
                  </tr>
                </tbody>
              </table>
              <div className="cart__next-button-container">
                <Link to="/checkout">
                  <button
                    disabled={!this.canCheckout}
                    className="cart__next-button"
                  >
                    Далее >>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemsInCart: state
  };
};

export default connect(
  mapStateToProps,
  {
    action__changeQantity,
    action__deleteItemFromCart
  }
)(Cart);
