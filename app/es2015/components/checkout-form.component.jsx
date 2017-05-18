import React from "react";



export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	customerName : "",
    	customerTel : "",
    	customerAddr : ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTelChange = this.handleTelChange.bind(this);
    this.handleAddrChange = this.handleAddrChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({customerName: event.target.value});
  }
  handleTelChange(event) {
  	var tel = event.target.value;
  	var newState = tel.match(/^\+[0-9-]*|^[0-9]+[0-9-]*/g);
  	newState = (newState !== null) ? newState.join('') : '';
    this.setState({customerTel: newState});
  }
  handleAddrChange(event) {
    this.setState({customerAddr: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.customerAddr);
    console.log(this.props.itemsInCart);
    event.preventDefault();
    fetch('/php/server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        customerName: this.state.customerName,
        customerTel : this.state.customerTel,
        customerAddr : this.state.customerAddr,
        orderData : this.props.itemsInCart
      })
    })
    .then(response => console.log(response))
    .catch(error => console.error("error",error));
  }

  render() {
    return (
				<div className="col-md-6">
					<p className="main-text main-text_bold">
						Пожалуйста, заполните форму
					</p>
					<form className="checkout__form">
						<input type="input" className="checkout__form__input" name="customerName" placeholder="Ваше имя" value={this.state.customerName} onChange={this.handleNameChange} />
						<input type="input" className="checkout__form__input" name="customerTel" placeholder="Телефон" value={this.state.customerTel} onChange={this.handleTelChange} />
						<input type="input" className="checkout__form__input" name="customerAddr" placeholder="Адрес" value={this.state.customerAddr} onChange={this.handleAddrChange} />
						<div className="checkout__checkout-button-container">
							<button className="checkout__checkout-button" onClick={this.handleSubmit}>Оформить заказ</button>
						</div>
					</form>
				</div>	
    );
  }
}

