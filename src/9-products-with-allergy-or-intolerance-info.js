const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = (mainArray) => {
  mainArray = stockProducts;
  let objectExpected = [];
  for (let i = 0; i < mainArray.length; i += 1) {
    if (mainArray[i].allergyOrIntolerance !== undefined) {
      let productAllerOrIntoNoComma = mainArray[i].allergyOrIntolerance.join(' ');
      objectExpected.push({
        description: mainArray[i].description,
        formattedPrice: `R$ ${mainArray[i].price}`,
        allergyOrIntoleranceMessage: `Pode conter: ${productAllerOrIntoNoComma}`,
      });
    }
  }
  return objectExpected;
};
getProductsWithAllergyOrIntoleranceInfo(stockProducts);
module.exports = { getProductsWithAllergyOrIntoleranceInfo };
