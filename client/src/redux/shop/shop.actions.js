import { ShopActionTypes } from "./shop.types";

export const updateCollections = (payload) => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: payload,
  };
};
