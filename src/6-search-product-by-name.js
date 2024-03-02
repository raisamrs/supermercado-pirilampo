// * Crie uma função que busque um produto pelo nome
const stockProducts = require('./data.json');

const searchProductByName = (nameProduct) => {
  let mainArray = stockProducts;
  let searchedProduct = nameProduct;
  let objectExpected;
  let pos = 0;
  for (let i = 0; i < mainArray.length; i += 1) {
    if (mainArray[i].productName === searchedProduct) {
      objectExpected = {
        description: mainArray[i].description,
        formattedPrice: `R$ ${mainArray[i].price}`,
      };
      pos = i;
    }
  }
  if (nameProduct === mainArray[pos].productName) {
    return objectExpected;
  }
  return null;
};
//* Retorno da função
//* Sinta-se à vontade para modificar o valor do argumento. Verifique no data.json a chave "productName" dos objetos e substitua à vontade 😉
console.log(searchProductByName('Feijão'));

module.exports = { searchProductByName };
