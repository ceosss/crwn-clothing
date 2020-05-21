import React from "react";

import { connect } from "react-redux";

import CheckoutItem from "./../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "./../../components/stripe-button/stripe-button.component";

import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalPriceContainer,
  TestWariningContainer,
} from "./checkout.styles";

// import "./checkout.styles.scss";

const Checkout = (props) => {
  const { items, totalPrice } = props;

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>

      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <TotalPriceContainer>
        <span>TOTAL: $ {totalPrice}</span>
      </TotalPriceContainer>
      <TestWariningContainer>
        *Please use the following test credit card fot payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/28 - CVV: 123
      </TestWariningContainer>
      <StripeCheckoutButton price={totalPrice} />
    </CheckoutPageContainer>
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
