// 7kyu - Make a function that does arithmetic!

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:
// arithmetic(5, 2, "add")      => returns 7
// arithmetic(5, 2, "subtract") => returns 3
// arithmetic(5, 2, "multiply") => returns 10
// arithmetic(5, 2, "divide")   => returns 2.5

// ArithmeticFunction.arithmetic(5, 2, "add")      => returns 7
// ArithmeticFunction.arithmetic(5, 2, "subtract") => returns 3
// ArithmeticFunction.arithmetic(5, 2, "multiply") => returns 10
// ArithmeticFunction.arithmetic(5, 2, "divide")   => returns 2

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

//OU

const arithmetic = (a, b, operator) =>
  ({
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  }[operator]);

//OU

function arithmetic(a, b, operator) {
  optable = { add: "+", subtract: "-", multiply: "*", divide: "/" };
  return eval(a + optable[operator] + b);
}

//OU

function arithmetic(a, b, op) {
  return {
    m: (a, b) => a * b,
    d: (a, b) => a / b,
    a: (a, b) => a + b,
    s: (a, b) => a - b,
  }[op[0]](a, b);
}

//OU

function arithmetic(a, b, operator) {
  return ops[operator](a, b);
}

const ops = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};
