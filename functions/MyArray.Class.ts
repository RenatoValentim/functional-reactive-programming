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

  myFilter(func: any): T[] {
    const newArray = [];
    for (let index = 0; index < this.array.length; index++) {
      if (func(this.array[index], index, this.array)) {
        newArray.push(this.array[index]);
      }
    }

    return newArray;
  }

  myReduce(func: any, inicialValue: any): any {
    let accumulator = inicialValue;
    for (let index = 0; index < this.array.length; index++) {
      if (!accumulator && index === 0) {
        accumulator = this.array[index];
      } else {
        accumulator = func(accumulator, this.array[index], index, this.array);
      }
    }

    return accumulator;
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

const names = (product: Product) => product.name;
const price = (product: Product) => product.qtde * product.price;

const NAMES_PRODUCTS = new MyArrayClass(CART);
const PRICE_PRODUCTS = new MyArrayClass(CART);

console.log('NAMES: ', NAMES_PRODUCTS.myMap(names));
console.log('PRICES: ', PRICE_PRODUCTS.myMap(price));

const qtdMajorZero = (product: Product) => product.qtde > 0;
const namesProducts = (product: Product) => product.name;

const productsInStock = new MyArrayClass(CART);
const namesProductsInStock = productsInStock;

console.log(productsInStock.myFilter(qtdMajorZero));
console.log(namesProductsInStock.myMap((product: Product) => product.name));
