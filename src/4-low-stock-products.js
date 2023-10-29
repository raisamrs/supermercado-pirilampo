const stockProducts = require('./data.json');

const getLowStockProducts = (mainArray) => {
  mainArray = stockProducts;

  let lowStockArray = [];

  for (let index = 0; index < mainArray.length; index += 1) {
    let quantity = mainArray[index].quantityInStock;
    let productName = mainArray[index].productName;
    if (quantity > 0 && quantity <= 10) {
      lowStockArray.push(
        `${productName}: ${quantity} unidades`,
      );
    }
  }
  return lowStockArray;
};

getLowStockProducts(stockProducts);

module.exports = { getLowStockProducts };
