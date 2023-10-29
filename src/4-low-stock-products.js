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

module.exports = { getLowStockProducts };
