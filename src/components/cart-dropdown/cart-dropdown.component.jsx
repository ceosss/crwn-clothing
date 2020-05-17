import React from "react";

import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "./../cart-item/cart-item.component";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

const CartDropdown = (props) => {
  const { items } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapstateToProps = (state) => {
  return {
    items: state.cart.items,
  };
};

export default connect(mapstateToProps, null)(CartDropdown);
