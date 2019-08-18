export const getPromoQuantityString = item => {
  switch (item.promotionType) {
    case '6+1': {
      if (Number(item.quantity) >= Number(item.promotionFrom)) {
        return `(+${Number(
          Math.floor(Number(item.quantity) / Number(item.promotionFrom))
        )} по акции)`;
      }
      break;
    }

    default:
      return '';
  }
};
