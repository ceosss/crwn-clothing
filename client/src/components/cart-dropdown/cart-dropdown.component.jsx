import React from "react";

import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "./../cart-item/cart-item.component";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import "./cart-dropdown.styles.scss";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./cart-dropdown.styles";

const CartDropdown = (props) => {
  const { items, history, toggleCartHidden } = props;

  const handleClick = () => {
    history.push("/checkout");
    toggleCartHidden();
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessageContainer>YOUR CART IS EMPTY</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
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
