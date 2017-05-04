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
    alert('Данные были отправлены!');
    console.log(this.state);
    console.log(this.props.itemsInCart);
    event.preventDefault();
  }

  render() {
    return (
				<div className="col-md-6">
					<p className="main-text main-text_bold">
						Пожалуйста, заполните форму
					</p>
					<form className="checkout__form" onSubmit={this.handleSubmit}>
						<input type="input" className="checkout__form__input" placeholder="Ваше имя" value={this.state.customerName} onChange={this.handleNameChange} />
						<input type="input" className="checkout__form__input" placeholder="Телефон" value={this.state.customerTel} onChange={this.handleTelChange} />
						<input type="input" className="checkout__form__input" placeholder="Адрес" value={this.state.customerAddr} onChange={this.handleAddrChange} />
						<div className="checkout__checkout-button-container">
							<button className="checkout__checkout-button">Оформить заказ</button>
						</div>
					</form>
				</div>	
    );
  }
}


// export default class CheckoutForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state =	{	customerName : ""	};
// 		this.handleInput = this.handleInput.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
		
// 	}
// 	handleInput(event) {
// 		console.log("handleInput(event)", event.target.customerName);
// 		this.setState({customerName : event.target.customerName });
// 	}
// 	handleSubmit(event) {
// 		event.preventDefault();
// 	}
// 	render() {
// 		return (
// 				<div className="col-md-6">
// 					<p className="main-text main-text_bold">
// 						Пожалуйста, заполните форму
// 					</p>
// 					<form className="checkout__form" onSubmit={this.handleSubmit}>
// 						<input type="input" className="checkout__form__input" placeholder="Ваше имя" value={this.state.customerName} onChange={this.handleInput} />
						
// 						<div className="checkout__checkout-button-container">
// 							<button className="checkout__checkout-button">Оформить заказ</button>
// 						</div>
// 					</form>
// 				</div>	
// 		);
// 	}
// }