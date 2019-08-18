import React from 'react';
import { connect } from 'react-redux';
import CheckoutForm from './checkout-form.component.jsx';
import { getPromoQuantityString } from './get-promo-quantity-string';
import './checkout.component.scss';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemsInCart: [] };
  }

  render() {
    return (
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
              <p className="main-text main-text_bold">Детали заказа:</p>
              <ul className="main-text">
                {this.props.itemsInCart.length ? (
                  this.props.itemsInCart.map((item, i) => (
                    <li key={i}>
                      {item.title} - {item.quantity} шт.{' '}
                      {getPromoQuantityString(item)}
                    </li>
                  ))
                ) : (
                  <li>В корзине нет заказов</li>
                )}
              </ul>
            </div>
            <CheckoutForm itemsInCart={this.props.itemsInCart} />
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
  null
)(Checkout);
