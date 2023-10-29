const stockProducts = require('./data.json');

const getOutOfStockProducts = (mainArray) => {
  mainArray = stockProducts;
  /* let arrayProductsOutOfStock = []; */
  let formater = /\s*,\s*/;
  let counter = '';
  let index = 0;
  for (index = 0; index < mainArray.length; index += 1) {
    let productOutOfStock = mainArray[index].productName;
    if (mainArray[index].quantityInStock === 0) {
      counter = `${counter}, ${productOutOfStock}`;
    }
  } counter = counter.slice(2).split(formater);
  return counter;
};

getOutOfStockProducts(stockProducts);
module.exports = { getOutOfStockProducts };
