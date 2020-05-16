import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "./11.2 shopping-bag.svg.svg";

import { toggleCartHidden } from "./../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, item }) => {
  const getItemCount = () => {
    var sum = 0;
    for (var key in item) sum += item[key].quantity;
    return sum;
  };

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{getItemCount()}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => {
  return {
    item: state.cart.items,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
