const NUMBERS = [1, 2, 3, 4, 5];
const DOUBLE = (n: number) => n * 2;

console.log('callback double', NUMBERS.map(DOUBLE)); // [ 2, 4, 6, 8, 10 ]

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
] as Product;

const NAMES_PRODUCTS = CART.map(product => product.name);
const PRICE_PRODUCTS = CART.map(product => product.qtde * product.price);
console.log('obtained directly', NAMES_PRODUCTS);
console.log('obtained directly', PRICE_PRODUCTS);

const getNames = (product: Product) => product.name;
const getTotalToPay = (product: Product) => product.qtde * product.price;
console.log('obtained through callback', CART.map(getNames));
console.log('obtained through callback', CART.map(getTotalToPay));
