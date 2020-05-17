import React from "react";

import { connect } from "react-redux";
import CheckoutItem from "./../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = (props) => {
  const { items, totalPrice } = props;

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>TOTAL: $ {totalPrice}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
    totalPrice: state.cart.items.reduce(
      (accumulatedQuantity, item) =>
        accumulatedQuantity + item.quantity * item.price,
      0
    ),
  };
};

export default connect(mapStateToProps)(Checkout);
