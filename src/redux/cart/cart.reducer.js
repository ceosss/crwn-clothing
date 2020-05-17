import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";
import { totalPriceCal } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: [],
  totalPrice: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
        totalPrice: totalPriceCal(state.items, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
