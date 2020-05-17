import React from "react";

import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "./../cart-item/cart-item.component";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

const CartDropdown = (props) => {
  const { items, history, toggleCartHidden } = props;

  const handleClick = () => {
    history.push("/checkput");
    toggleCartHidden();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">YOUR CART IS EMPTY</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapstateToProps = (state) => {
  return {
    items: state.cart.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default withRouter(
  connect(mapstateToProps, mapDispatchToProps)(CartDropdown)
);
