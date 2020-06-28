interface Product {
  name: string;
  qtde: number;
  price: number;
  fragile: boolean;
}

const CART = [
  { name: "Caneta", qtde: 10, price: 7.99, fragile: false },
  { name: "Impressora", qtde: 1, price: 649.5, fragile: true },
  { name: "Caderno", qtde: 4, price: 27.1, fragile: false },
  { name: "Lapis", qtde: 3, price: 5.82, fragile: false },
  { name: "Tesoura", qtde: 1, price: 19.2, fragile: true },
];

const priceTotalToProduct = (product: Product) => product.qtde * product.price;

const isFragile = (product: Product) => product.fragile;

const sum = (value1: number, value2: number) => value1 + value2;

const average = (objectMedia: resultObjectMedia, priceTotalToProduct: number) => {
  const newQtde = objectMedia.qtde + 1;
  const newTotal = objectMedia.total + priceTotalToProduct;
  return {
    qtde: newQtde,
    total: newTotal,
    media: newTotal / newQtde,
  };
};

type resultObjectMedia = { qtde: 0, total: 0, media: 0 };
const startingAverage = { qtde: 0, total: 0, media: 0 };

const grandTotal = CART.map(priceTotalToProduct).reduce(sum, 0);

const valuableFragileProducts = CART.filter(isFragile)
  .map(priceTotalToProduct)
  .reduce(average, startingAverage);

console.log('CONSOLE FROM REDUCE:', grandTotal);
console.log('CONSOLE FROM FILTER, MAP AND REDUCE:', valuableFragileProducts);
