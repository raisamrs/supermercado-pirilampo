const stockProducts = require('./data.json');

const getUniqueProductsAmount = (mainArray) => {
  mainArray = stockProducts;
  return mainArray.length;
};
module.exports = { getUniqueProductsAmount };
