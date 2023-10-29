const stockProducts = require('./data.json');

const getProductsAmount = (mainArray) => {
  mainArray = stockProducts;
  let quantity = 0;
  for (let i = 0; i < mainArray.length; i += 1) {
    quantity += mainArray[i].quantityInStock;
  }
  return quantity;
};

module.exports = { getProductsAmount };
