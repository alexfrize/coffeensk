import React from 'react';
import Header from './header.component.jsx';
import Footer from './footer.component.jsx';
import Cart from './cart.component.jsx';
import Checkout from './checkout.component.jsx';
import ShopCoffee from './shop-coffee.component.jsx';
import Rent from './rent.component.jsx';
import Repair from './repair.component.jsx';
import Contacts from './contacts.component.jsx';
import ToCartButton from './to-cart-button.component.jsx';
import Consumables from './consumables.component.jsx';
import SendMessage from './send-message.component.jsx';

import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { AnimatedSwitch } from 'react-router-transition';

export class Main extends React.Component {
  state = {
    itemsInCart: []
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    window.scrollTo(0, 0);
  }

  getItemsInCart(itemsInCart) {
    return itemsInCart;
  }

  render() {
    const CheckoutRoute = props => (
      <Checkout itemsInCart={this.state.itemsInCart} {...props} />
    );

    return (
      <main>
        <Header />
        <div className="container">
          <AnimatedSwitch
            atEnter={{ opacity: 0, scaleY: 0 }}
            atLeave={{ opacity: 2, scaleY: 0 }}
            atActive={{ opacity: 1, scaleY: 1 }}
            mapStyles={styles => {
              if (styles.opacity > 1) {
                return { display: 'none' };
              }
              return {
                opacity: styles.opacity,
                transform: `scaleX(${styles.scaleY})`
              };
            }}
          >
            <Route exact path="/" component={ShopCoffee} />
            <Route path="/rent" component={Rent} />
            <Route path="/repair" component={Repair} />
            <Route path="/consumables" component={Consumables} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/checkout" render={CheckoutRoute} />
            <Route path="/cart" component={Cart} />
            <Route path="/sendmessage" component={SendMessage} />
          </AnimatedSwitch>
        </div>
        <ToCartButton />
        <Footer />
      </main>
    );
  }
}

export default withRouter(connect()(Main));
