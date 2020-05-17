export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const totalPriceCal = (cartItem, cartItemToAdd) => {
  let price = 0;
  for (let key in cartItem) {
    price += cartItem[key].quantity * cartItem[key].price;
  }
  price += cartItemToAdd.price;
  return price;
};
