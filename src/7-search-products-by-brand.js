// * Crie uma função que busque por produtos de uma marca específica
const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  let mainArray = stockProducts;
  let searchedBrand = brand;
  let objectExpected = [];
  for (let i = 0; i < mainArray.length; i += 1) {
    if (mainArray[i].brand === searchedBrand) {
      objectExpected.push({
        description: mainArray[i].description,
        formattedPrice: `R$ ${mainArray[i].price}`,
      });
    }
  }
  return objectExpected;
};

module.exports = { searchProductsByBrand };
//* Retorno da função
//* Sinta-se à vontade para modificar o valor do argumento. Verifique no data.json a chave "brand" dos objetos e substitua à vontade 😉
console.log(searchProductsByBrand('Andorinha'));
