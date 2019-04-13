import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import './to-cart-button.component.scss';

class ToCartButton extends React.Component {
  getItemsInCart() {
    let itemCount;

    if (this.props.itemsInCart.length) {
      itemCount = this.props.itemsInCart
        .map(el => el.quantity)
        .reduce((prev, current) => prev + current);
    } else {
      itemCount = 0;
    }
    return itemCount;
  }

  render() {
    return (
      <Link to="/cart">
        <section className="to-cart-button">
          <ReactCSSTransitionGroup
            transitionName="animate-counter"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div
              className="to-cart-button__text-container"
              key={this.getItemsInCart()}
            >
              <p className="to-cart-button__text-container__text">
                {this.getItemsInCart()}
              </p>
            </div>
          </ReactCSSTransitionGroup>
        </section>
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemsInCart: state
  };
};

export default connect(
  mapStateToProps,
  null
)(ToCartButton);
