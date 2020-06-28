export class MyArrayClass<T> {
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
