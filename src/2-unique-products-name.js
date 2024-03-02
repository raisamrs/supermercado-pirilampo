// *2 - Crie uma função que retorne os nomes dos produtos únicos em estoque

const stockProducts = require('./data.json');

const getUniqueProductsName = (mainArray) => {
  mainArray = stockProducts;

  let arrayProductsName;
  let formater = /\s*,\s*/;
  if (mainArray.length > 0) {
    let counter = mainArray[0].productName;
    for (let i = 1; i < mainArray.length; i += 1) {
      counter = `${counter}, ${mainArray[i].productName}`;
    }
    arrayProductsName = counter.split(formater);
  } else if (mainArray.length === 0) {
    arrayProductsName = [];
  }
  return arrayProductsName;
};

getUniqueProductsName('./data.json');
module.exports = { getUniqueProductsName };

//* Retorno da função
console.log(getUniqueProductsName(stockProducts));
