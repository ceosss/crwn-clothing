import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "./../../redux/cart/cart.actions";

// import "./cart-icon.styles.scss";
import {
  ItemCountContainer,
  ShoppingIconContainer,
  CartIconContainer,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: state.cart.items.reduce(
    (accumulatedQuantity, item) => accumulatedQuantity + item.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
