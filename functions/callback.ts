// Declaration
function execute(func: (n1: number, n2: number) => number, n1: number, n2: number) {
   return func(n1, n2)
}

// Declaration
function add(n1: number, n2: number) {
  return n1 + n2;
}

// Declaration
function subtract(n1: number, n2: number) {
  return n1 - n2;
}

// Expression
const MULTIPLY = (n1: number, n2: number) => n1 * n2;

// Expression
const DIVIDE = (n1: number, n2: number) => n1 / n2;

const SUM = execute(add, 10, 5);
const DECREASE = execute(subtract, 10, 5);
const PRODUCT = execute(MULTIPLY, 10, 5);
const QUOTIENT = execute(DIVIDE, 10, 5);

console.log(SUM); // 15
console.log(DECREASE); // 5
console.log(PRODUCT); // 50
console.log(QUOTIENT); // 2
