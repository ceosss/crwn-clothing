import React from "react";

// import "./cart-item.styles.scss";
import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemNameContainer,
  CartItemImage,
} from "./cart-item.styles";

const CartItem = (props) => {
  const { name, price, imageUrl, quantity } = props.item;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <ItemNameContainer>{name}</ItemNameContainer>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
