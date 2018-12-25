import { ADD_TO_CARD, CHANGE_QUANTITY, DELETE_FROM_CART } from "../constants";

export const action__addToCart = item => {
  return {
    type: ADD_TO_CARD,
    payload: item
  };
};

export const action__changeQantity = (itemIndex, newQuantity) => {
  return {
    type: CHANGE_QUANTITY,
    payload: {
      itemIndex,
      newQuantity
    }
  };
};

export const action__deleteItemFromCart = itemIndex => {
  return {
    type: DELETE_FROM_CART,
    payload: {
      itemIndex
    }
  };
};
