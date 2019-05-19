import { ADD_TO_CARD, CHANGE_QUANTITY, DELETE_FROM_CART } from '../constants';

export const mainAppReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      // Проверяем, есть ли уже такой товар в корзине
      let foundItemAtIndex = state
        .map(el => el.title)
        .indexOf(action.payload.title);

      if (foundItemAtIndex === -1) {
        return [...state, { ...action.payload, quantity: 1 }];
      }
      return [
        ...state.slice(0, foundItemAtIndex),
        { ...action.payload, quantity: state[foundItemAtIndex].quantity + 1 },
        ...state.slice(foundItemAtIndex + 1)
      ];

    /* ================================================================= */

    case DELETE_FROM_CART:
      let itemToDeleteIndex = action.payload.itemIndex;
      var newStateAfterDelete = [...state].filter(
        (_, i) => i !== itemToDeleteIndex
      );

      return newStateAfterDelete;

    /* ================================================================= */

    case CHANGE_QUANTITY:
      let { itemIndex, newQuantity } = action.payload;
      let newQuantityStateArray = [...state];
      newQuantityStateArray[itemIndex].quantity = newQuantity;

      return [
        ...state.slice(0, itemIndex),
        { ...state[itemIndex], quantity: newQuantity },
        ...state.slice(itemIndex + 1)
      ];

    default:
      return state;
  }
};
