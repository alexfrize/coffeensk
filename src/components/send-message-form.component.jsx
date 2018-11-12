import React from "react";
import "./send-message.component.scss";

export default class SendMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	customerName : "",
    	customerTel : "",
    	customerMessage : ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTelChange = this.handleTelChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateCheckoutPossibility() {
    this.canCheckout = this.state.customerName && this.state.customerTel.length > 9 && this.state.customerMessage.length > 10;
  }

  handleNameChange(event) {
    this.setState({customerName: event.target.value});
    this.updateCheckoutPossibility();    
  }
  handleTelChange(event) {
  	var tel = event.target.value;
  	var newState = tel.match(/^\+[0-9-]*|^[0-9]+[0-9-]*/g);
  	newState = (newState !== null) ? newState.join('') : '';
    this.setState({customerTel: newState});
    this.updateCheckoutPossibility();    
  }
  handleMessageChange(event) {
    this.setState({customerMessage: event.target.value});
    this.updateCheckoutPossibility();    
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/php/send-message.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        customerName: this.state.customerName,
        customerTel : this.state.customerTel,
        customerMessage : this.state.customerMessage,
      })
    })
    .then(response => {
      console.log(response);
      console.log(response.status);
      if (response.status === 200 || response.status === 0) {
        this.setState({
          customerName: "",
          customerTel : "",
          customerMessage : ""
        });
        alert("Ваше сообщение было отправлено. Скоро с Вами свяжутся.");
      }
      else {
        alert("При отправке сообщения возникла ошибка. Пожалуйста, повторите попытку чуть позже, либо свяжитесь с нами по телефону."); 
      }
    })
    .catch(error => console.error("error",error));
  }

  render() {
    return (
				<div className="col-md-12">
					<p className="main-text main-text_bold">
						Пожалуйста, заполните форму
					</p>
					<form className="send-message__form" onSubmit={this.handleSubmit}>
						<input type="input" className="send-message__form__input" placeholder="Ваше имя" value={this.state.customerName} onChange={this.handleNameChange} />
						<input type="input" className="send-message__form__input" placeholder="Телефон" value={this.state.customerTel} onChange={this.handleTelChange} />
            <textarea className="send-message__form__textarea" placeholder="Ваше сообщение" value={this.state.customerMessage} onChange={this.handleMessageChange}>
               Ваше сообщение
            </textarea>
						<div className="send-message__send-message-button-container">
							<button className="send-message__send-message-button">Отправить сообщение</button>
						</div>
					</form>
				</div>	
    );
  }
}
