// * Crie uma função que retorne todos os produtos que possuam alguma vitamina em seu valor nutricional
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

module.exports = { getProductsRichInVitamin };

// * Retorno da função:
console.log(getProductsRichInVitamin(stockProducts));
