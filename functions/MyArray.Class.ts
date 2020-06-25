class MyArrayClass<T> {
  constructor(private array: T[]) {}
  
  myMap(func: any): T[] {
    const newArray = [];
    for (let index = 0; index < this.array.length; index++) {
      const postFunctionResult = func(this.array[index], index, this.array);
      newArray.push(postFunctionResult);
    }

    return newArray;
  }
}

// Instances
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

const NAMES = (product: Product) => product.name;
const PRICE = (product: Product) => product.qtde * product.price;

const NAMES_PRODUCTS = new MyArrayClass(CART);
const PRICE_PRODUCTS = new MyArrayClass(CART);

console.log('NAMES: ', NAMES_PRODUCTS.myMap(NAMES));
console.log('PRICES: ', PRICE_PRODUCTS.myMap(PRICE));
