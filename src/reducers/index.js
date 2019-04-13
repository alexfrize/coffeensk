import { ADD_TO_CARD, CHANGE_QUANTITY, DELETE_FROM_CART } from '../constants';

export const mainAppReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      let newSelectedItem = action.payload;
      let newStateArray = [...state];

      // Проверяем, есть ли уже такой товар в корзине
      if (
        newStateArray.filter(el => el.title === newSelectedItem.title)
          .length === 0
      ) {
        newSelectedItem.quantity = 1;
        newStateArray.push(newSelectedItem);
      } else {
        let foundItemAtIndex = newStateArray
          .map(el => el.title)
          .indexOf(newSelectedItem.title);
        newStateArray[foundItemAtIndex].quantity++;
      }

      return newStateArray;

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

      return newQuantityStateArray;

    default:
      return state;
  }
};
