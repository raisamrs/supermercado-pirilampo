const stockProducts = require('./data.json');

const getProductsAmount = (mainArray) => {
  mainArray = stockProducts;
  let quantity = 0;
  for (let index = 0; index < mainArray.length; index += 1) {
    quantity += mainArray[index].quantityInStock;
  }
  return quantity;
};

module.exports = { getProductsAmount };
