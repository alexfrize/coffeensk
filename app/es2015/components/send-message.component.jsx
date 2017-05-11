import React from "react";
import SendMessageForm from "./send-message-form.component.jsx";
import { RouteTransition } from 'react-router-transition';

export default class SendMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {itemsInCart : []};
	}

	render() {
		console.log("SendMessage /");
		return(
			<section className="send-message">
				<RouteTransition
					pathname={this.props.location.pathname}
					atEnter={{ translateY: 100 }}
					atLeave={{ translateY: -100 }}
					atActive={{ translateY: 0 }}
					mapStyles={styles => ({ transform: `translateY(${styles.translateY}%)` })}> {this.props.children}			
					
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
				</RouteTransition>
			</section>	
		);
	}
}