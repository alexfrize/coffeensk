import React from "react";
import SendMessageForm from "./send-message-form.component.jsx";

export default class SendMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {itemsInCart : []};
	}

	render() {
		console.log("SendMessage /");
		return(
			<section className="send-message">

					
					<div className="container">
						<div className="row">
							<div className="send-message__title-container">
								<h2 className="send-message__title-container__title">
									Оставить заявку
								</h2>
							</div>
						</div>
						<div className="row">
							<SendMessageForm />										
						</div>
					</div>

			</section>	
		);
	}
}