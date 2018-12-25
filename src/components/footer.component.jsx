import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "./footer.component.scss";
const Footer = () => {
  return (
    <footer>
      <section className="footer__piclinks">
        <div className="container">
          <div className="row">
            <Link to="/repair">
              <div className="footer__piclinks__item">
                <div className="footer__piclinks__item__inner footer__piclinks__item__inner__service">
                  <p className="footer__piclinks__item__inner__text">
                    Ремонт и обслуживание
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/rent">
              <div className="footer__piclinks__item">
                <div className="footer__piclinks__item__inner footer__piclinks__item__inner__rent">
                  <p className="footer__piclinks__item__inner__text">
                    Аренда кофемашин
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="footer__piclinks__item">
                <div className="footer__piclinks__item__inner footer__piclinks__item__inner__coffee">
                  <p className="footer__piclinks__item__inner__text">
                    Продажа кофе
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="footer__menu-and-contacts">
        <div className="container">
          <div className="row">
            <div className="footer__menu-and-contacts__inner">
              <div className="row">
                <nav className="footer__menu-and-contacts__inner__menu">
                  <ul>
                    <li>
                      <Link to="/repair">Ремонт и обслуживание</Link>
                    </li>
                    <li>
                      <Link to="/rent">Аренда кофемашин</Link>
                    </li>
                    <li>
                      <Link to="/consumables">Запчасти для кофемашин</Link>
                    </li>
                    <li>
                      <Link to="/">Продажа кофе</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Наши контакты</Link>
                    </li>
                  </ul>
                </nav>
                <div className="footer__menu-and-contacts__inner__schedule">
                  <p className="footer__menu-and-contacts__inner__schedule__text">
                    Пн-Чт: 10:00-18:00
                    <br />
                    Пт: 10:00- 17:00
                    <br />
                    Сб-Вс: выходной
                  </p>
                </div>
                <div className="footer__menu-and-contacts__inner__tel-and-address">
                  <img
                    className="footer__menu-and-contacts__inner__tel-and-address__logo"
                    src={logo}
                    alt="logo"
                  />
                  <p className="footer__menu-and-contacts__inner__tel-and-address__tel">
                    тел: 7(383) 375-58-09
                  </p>
                  <p className="footer__menu-and-contacts__inner__tel-and-address__addrtext">
                    г. Новосибирск
                    <span>ул Орджоникидзе 47</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
