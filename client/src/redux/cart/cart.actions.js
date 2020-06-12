import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (payload) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: payload,
  };
};

export const clearItem = (payload) => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: payload,
  };
};

export const removeItem = (payload) => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: payload,
  };
};
