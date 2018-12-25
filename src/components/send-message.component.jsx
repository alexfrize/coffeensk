import React from "react";
import SendMessageForm from "./send-message.component.jsx";
import "./send-message.component.scss";

const SendMessage = props => {
  return (
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
};

export default SendMessage;
