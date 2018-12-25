import React from "react";
import Header from "./header.component.jsx";
import Footer from "./footer.component.jsx";
import Cart from "./cart.component.jsx";
import Checkout from "./checkout.component.jsx";
import ShopCoffee from "./shop-coffee.component.jsx";
import Rent from "./rent.component.jsx";
import Repair from "./repair.component.jsx";
import Contacts from "./contacts.component.jsx";
import ToCartButton from "./to-cart-button.component.jsx";
import Consumables from "./consumables.component.jsx";
import SendMessage from "./send-message.component.jsx";

import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

/*
import { AnimatedSwitch } from 'react-router-transition';

function mapStyles(styles) {
  return {
		// transition: '0.1s',
    opacity: styles.opacity,
		transform: `scaleY(${styles.scaleY})`,
		height: styles.height
  };
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
		scaleY: 0,
  },
  atLeave: {
		opacity: 0,
		scaleY: 0,
  },
  atActive: {
		opacity: 1,
		scaleY: 1,
  },
};
*/

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemsInCart: [] };
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
        {/* <AnimatedSwitch
					atEnter={bounceTransition.atEnter}
					atLeave={bounceTransition.atLeave}
					atActive={bounceTransition.atActive}
					mapStyles={mapStyles}
					className="switch-wrapper"
				> */}
        <Route exact path="/" component={ShopCoffee} />
        <Route path="/rent" component={Rent} />
        <Route path="/repair" component={Repair} />
        <Route path="/consumables" component={Consumables} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/checkout" render={CheckoutRoute} />
        <Route path="/cart" component={Cart} />
        <Route path="/sendmessage" component={SendMessage} />
        {/* </AnimatedSwitch> */}
        <ToCartButton />
        <Footer />
      </main>
    );
  }
}

export default withRouter(connect()(Main));
