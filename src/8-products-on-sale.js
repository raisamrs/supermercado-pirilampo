const stockProducts = require('./data.json');

const getProductsOnSale = (mainArray) => {
  mainArray = stockProducts;
  let objectExpected = [];
  for (let i = 0; i < mainArray.length; i += 1) {
    if (mainArray[i].onSale === true) {
      objectExpected.push({
        description: mainArray[i].description,
        formattedPrice: `R$ ${mainArray[i].price}`,
        onSale: true,
      });
    }
  }
  return objectExpected;
  /*   console.log(`${mainArray[0].price} reais`); */
};
getProductsOnSale(stockProducts);

module.exports = { getProductsOnSale };
