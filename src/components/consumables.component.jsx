import React from "react";
import "./consumables.component.scss";

export default class Consumables extends React.Component {
  render() {
    return (
      <section className="consumables">
        <div className="container">
          <div className="row">
            <div className="consumables__title-container">
              <h2 className="consumables__title-container__title">
                Расходные материалы для кофемашин
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="main-text">
                Вы можете скачать прайс-лист на расходные материалы, нажав на
                кнопку «Скачать прайс-лист»
              </p>
              <div className="main-button-container">
                <a
                  href="/data/coffeensk_price.xls"
                  target="_blank"
                  className="main-button"
                >
                  Скачать прайс-лист
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
