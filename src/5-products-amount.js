//* Crie uma função que retorne o total de produtos em estoque
const stockProducts = require('./data.json');

const getProductsAmount = (mainArray) => {
  mainArray = stockProducts;
  let quantity = 0;
  for (let i = 0; i < mainArray.length; i += 1) {
    quantity += mainArray[i].quantityInStock;
  }
  return quantity;
};
//* Retorno da função:
console.log(getProductsAmount(stockProducts));

module.exports = { getProductsAmount };
