interface Product {
  name: string;
  qtde: number;
  price: number;
}

const CART = [
  { name: 'Caneta', qtde: 10, price: 7.99 },
  { name: 'Impressora', qtde: 0, price: 649.50 },
  { name: 'Caderno', qtde: 4, price: 27.10 },
  { name: 'Lapis', qtde: 3, price: 5.82 },
  { name: 'Tesoura', qtde: 1, price: 19.20 },
];

const qtdMajorZero = (product: Product) => product.qtde > 0;
const namesProducts = (product: Product) => product.name;

const productsInStock = CART.filter(qtdMajorZero);
const namesProductsInStock = CART.filter(qtdMajorZero).map(namesProducts);

console.log(productsInStock);
console.log(namesProductsInStock);
