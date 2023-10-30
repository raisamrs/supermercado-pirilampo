const stockProducts = require('./data.json');

const getProductsRichInVitamin = (mainArray) => {
  mainArray = stockProducts;
  let arrayExpected = [];
  let vitaminsObj;
  let vitaminsArray;
  for (let i = 0; i < mainArray.length; i += 1) {
    if (mainArray[i].nutritionalInfo.vitamins !== undefined) {
      vitaminsObj = mainArray[i].nutritionalInfo.vitamins;
      vitaminsArray = Object.entries(vitaminsObj).map(([key, value]) => `${key} - ${value}`);
      arrayExpected.push({
        description: mainArray[i].description,
        formattedPrice: `R$ ${mainArray[i].price}`,
        vitaminsInformation: vitaminsArray,
      });
    }
  }
  return arrayExpected;
};
/*   const teste = mainArray[17].nutritionalInfo.vitamins;
  console.log(teste);
  const array = Object.entries(teste).map(([key, value]) => `${key} - ${value}`);
  console.log(array); */

getProductsRichInVitamin(stockProducts);
module.exports = { getProductsRichInVitamin };
