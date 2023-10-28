const stockProducts = require('./data.json');

const getUniqueProductsName = (mainArray) => {
  mainArray = stockProducts;

  let arrayProductsName;
  let formater = /\s*,\s*/;
  if (mainArray.length > 0) {
    let counter = mainArray[0].productName;
    for (let index = 1; index < mainArray.length; index += 1) {
      counter = `${counter}, ${mainArray[index].productName}`;
    }
    arrayProductsName = counter.split(formater);
  } else if (mainArray.length === 0) {
    arrayProductsName = [];
  }
  return arrayProductsName;
};

getUniqueProductsName('./data.json');
module.exports = { getUniqueProductsName };
