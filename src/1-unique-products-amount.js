//* Crie uma função que retorne a quantidade de produtos únicos em estoque
const stockProducts = require('./data.json');

const getUniqueProductsAmount = (mainArray) => {
  mainArray = stockProducts;
  return mainArray.length;
};
module.exports = { getUniqueProductsAmount };

//* Retorno da função:
console.log(getUniqueProductsAmount(stockProducts));
