import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import './header.component.scss';

export default class Header extends React.Component {
  collapseOrNot() {
    return window.innerWidth < 768 ? 'collapse' : null;
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="header__logo col-md-3">
              <Link to="/">
                <img alt="logo" src={logo} className="header__logo__img" />
              </Link>
            </div>
            <div className="header__title col-md-6">
              <h1 className="header__title__h1">Аренда и ремонт кофемашин</h1>
            </div>
            <div className="header__contacts col-md-3">
              <div className="header__contacts__address">
                <p className="header__contacts__address__text">
                  г. Новосибирск, <span>Орджоникидзе, 47</span>
                </p>
              </div>
              <div className="header__contacts__phone">
                <a
                  href="tel:+73833755809"
                  className="header__contacts__phone__text"
                >
                  тел: 7 (383) 375-58-09
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <nav className="header__menu">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".header__menu__list"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="header__menu__list navbar-collapse collapse in">
                <ul className="nav nav-pills nav-justified">
                  <li>
                    <Link
                      to="/"
                      data-toggle={this.collapseOrNot()}
                      data-target=".header__menu__list"
                    >
                      Кофе
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/repair"
                      data-toggle={this.collapseOrNot()}
                      data-target=".header__menu__list"
                    >
                      Ремонт и обслуживание
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/consumables"
                      data-toggle={this.collapseOrNot()}
                      data-target=".header__menu__list"
                    >
                      Расходные материалы
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/rent"
                      data-toggle={this.collapseOrNot()}
                      data-target=".header__menu__list"
                    >
                      Аренда кофемашины
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contacts"
                      data-toggle={this.collapseOrNot()}
                      data-target=".header__menu__list"
                    >
                      Контакты
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="row">
            <div className="header__banner">
              <div className="header__banner__text-container">
                <p className="header__banner__text">
                  Есть вопросы или предложения?
                  <br />
                  Звоните НАМ: 7 (383) 375-58-09
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
