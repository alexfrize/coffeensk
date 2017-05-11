import React from "react";



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

  handleNameChange(event) {
    this.setState({customerName: event.target.value});
  }
  handleTelChange(event) {
  	var tel = event.target.value;
  	var newState = tel.match(/^\+[0-9-]*|^[0-9]+[0-9-]*/g);
  	newState = (newState !== null) ? newState.join('') : '';
    this.setState({customerTel: newState});
  }
  handleMessageChange(event) {
    this.setState({customerMessage: event.target.value});
  }

  handleSubmit(event) {
    alert('Данные были отправлены!');
    console.log(this.state);
    event.preventDefault();
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
