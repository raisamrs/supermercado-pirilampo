//* Crie uma função que retorne todos os produtos com informações sobre alergia ou intolerância
const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  let objectExpected = [];

  stockProducts.forEach((product) => {
    if (product.allergyOrIntolerance !== undefined) {
      let productAllerOrIntoNoComma = product.allergyOrIntolerance.join(' ');
      objectExpected.push({
        description: product.description,
        formattedPrice: `R$ ${product.price}`,
        allergyOrIntoleranceMessage: `Pode conter: ${productAllerOrIntoNoComma}`,
      });
    }
  });

  return objectExpected;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };

// * Retorno da função:
console.log(getProductsWithAllergyOrIntoleranceInfo());
