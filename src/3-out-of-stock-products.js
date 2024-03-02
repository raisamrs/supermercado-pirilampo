//*  Crie uma função que retorne os nomes dos produtos indisponíveis do estoque
const stockProducts = require('./data.json');

const getOutOfStockProducts = (mainArray) => {
  mainArray = stockProducts;
  let formater = /\s*,\s*/;
  let counter = '';
  let i = 0;
  for (i = 0; i < mainArray.length; i += 1) {
    let productOutOfStock = mainArray[i].productName;
    if (mainArray[i].quantityInStock === 0) {
      counter = `${counter}, ${productOutOfStock}`;
    }
  } counter = counter.slice(2).split(formater);
  return counter;
};
module.exports = { getOutOfStockProducts };

//* Retorno da função
console.log(getOutOfStockProducts(stockProducts));
