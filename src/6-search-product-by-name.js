const stockProducts = require('./data.json');

const searchProductByName = (mainArray, nameProduct) => {
  mainArray = stockProducts;
  let searchedProduct = nameProduct;
  for (let i = 0; i < mainArray.length; i += 1) {
    if (mainArray[i].productName === searchedProduct) {
      objectProduct = {
        description: mainArray[i].description,
        formattedPrice: `R$ ${mainArray[i].price}`,
      };
    }
  }
  return objectProduct;
};

module.exports = { searchProductByName };
