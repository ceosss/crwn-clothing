import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "./11.2 shopping-bag.svg.svg";

import { toggleCartHidden } from "./../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
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
