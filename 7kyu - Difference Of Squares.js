// 7kyu - Difference Of Squares

// Description:

// Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.
// Example

// For example, when n = 10:

//     The square of the sum of the numbers is:

//     (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

//     The sum of the squares of the numbers is:

// 12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

// Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640
// Fundamentals

function differenceOfSquares(x) {
  let arr = Array.from(new Array(x), (_, idx) => idx + 1);
  return (
    Math.pow(
      arr.reduce((a, b) => a + b),
      2
    ) - arr.reduce((a, b) => a + Math.pow(b, 2))
  );
}

//OU

function differenceOfSquares(x) {
  var sum = 0,
    squareSum = 0;
  for (i = 0; i <= x; i++) {
    sum += i * i;
    squareSum += i;
  }
  return squareSum * squareSum - sum;
}

//OU

function differenceOfSquares(n) {
  let s = 0;
  let sq = 0;
  for (let i = 1; i <= n; i++) {
    s += i;
    sq += i * i;
  }
  return s * s - sq;
}

//OU

function differenceOfSquares(n) {
  let sqrSum = 1;
  let sumSqrt = 1;
  while (n > 1) {
    sqrSum += n;
    sumSqrt = sumSqrt + n ** 2;
    n--;
  }
  return sqrSum ** 2 - sumSqrt;
}

//OU

function differenceOfSquares(x) {
  // ...
  let arr = [];
  let s1 = 0;
  let s2 = 0;
  for (let i = 1; i <= x; i++) {
    s1 += Math.pow(i, 2);
    s2 += i;
  }
  return Math.pow(s2, 2) - s1;
}

//OU

const differenceOfSquares = (x) =>
  Math.pow((x * (x + 1)) / 2, 2) - (x * (x + 1) * (2 * x + 1)) / 6;

//OU

function differenceOfSquares(n) {
  let squareOfTheSum = 0;
  let sumOfTheSquares = 0;
  for (let i = 1; i <= n; i++) {
    squareOfTheSum += i;
  }
  for (let i = 1; i <= n; i++) {
    sumOfTheSquares += i ** 2;
  }
  let differense = squareOfTheSum ** 2 - sumOfTheSquares;
  return differense;
}
