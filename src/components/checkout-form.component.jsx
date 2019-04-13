import React from 'react';
import './checkout.component.scss';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: '',
      customerTel: '',
      customerAddr: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTelChange = this.handleTelChange.bind(this);
    this.handleAddrChange = this.handleAddrChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.canCheckout = false;
  }

  updateCheckoutPossibility() {
    this.canCheckout =
      this.state.customerName &&
      this.state.customerTel.length > 9 &&
      this.state.customerAddr.length > 10;
  }

  handleNameChange(event) {
    this.setState({ customerName: event.target.value });
    this.updateCheckoutPossibility();
  }

  handleTelChange(event) {
    var tel = event.target.value;
    var newState = tel.match(/^\+[0-9-]*|^[0-9]+[0-9-]*/g);
    newState = newState !== null ? newState.join('') : '';
    this.setState({ customerTel: newState });
    this.updateCheckoutPossibility();
  }

  handleAddrChange(event) {
    this.setState({ customerAddr: event.target.value });
    this.updateCheckoutPossibility();
  }

  handleSubmit(event) {
    console.log(this.state.customerAddr);
    console.log(this.props.itemsInCart);
    event.preventDefault();
    fetch('/php/send-order.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customerName: this.state.customerName,
        customerTel: this.state.customerTel,
        customerAddr: this.state.customerAddr,
        orderData: this.props.itemsInCart
      })
    })
      .then(response => {
        console.log(response);
        console.log(response.status);
        if (response.status === 200 || response.status === 0) {
          this.setState({
            customerName: '',
            customerTel: '',
            customerAddr: ''
          });
          alert('Ваша заявка была отправлена. Скоро с Вами свяжутся.');
        } else {
          alert(
            'При отправке данных возникла ошибка. Пожалуйста, повторите попытку чуть позже, либо свяжитесь с нами по телефону.'
          );
        }
      })
      .catch(error => {
        throw new Error(`Error ${error}`);
      });
  }

  render() {
    return (
      <div className="col-md-6">
        <p className="main-text main-text_bold">Пожалуйста, заполните форму</p>
        <form className="checkout__form">
          <input
            type="input"
            className="checkout__form__input"
            name="customerName"
            placeholder="Ваше имя"
            value={this.state.customerName}
            onChange={this.handleNameChange}
          />
          <input
            type="input"
            className="checkout__form__input"
            name="customerTel"
            placeholder="Телефон"
            value={this.state.customerTel}
            onChange={this.handleTelChange}
          />
          <input
            type="input"
            className="checkout__form__input"
            name="customerAddr"
            placeholder="Адрес"
            value={this.state.customerAddr}
            onChange={this.handleAddrChange}
          />
          <div className="checkout__checkout-button-container">
            <button
              disabled={!this.canCheckout}
              className="checkout__checkout-button"
              onClick={this.handleSubmit}
            >
              Оформить заказ
            </button>
          </div>
        </form>
      </div>
    );
  }
}
