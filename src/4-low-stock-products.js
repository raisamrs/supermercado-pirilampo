//* Crie uma função que retorne os produtos com baixo estoque (entre 1 e 10 unidades) em um formato específico

const stockProducts = require('./data.json');

const getLowStockProducts = (mainArray) => {
  mainArray = stockProducts;

  let lowStockArray = [];

  for (let i = 0; i < mainArray.length; i += 1) {
    let quantity = mainArray[i].quantityInStock;
    let productName = mainArray[i].productName;
    if (quantity > 0 && quantity <= 10) {
      lowStockArray.push(
        `${productName}: ${quantity} unidades`,
      );
    }
  }
  return lowStockArray;
};
//* Retorno da função
console.log(getLowStockProducts(stockProducts));

module.exports = { getLowStockProducts };
