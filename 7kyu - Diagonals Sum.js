// 7kyu - Diagonals Sum

// Description:

// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

// Matrix = array of n length whose elements are n length arrays of integers.

// 3x3 example:

// diagonals( [
// [ 1, 2, 3 ],
// [ 4, 5, 6 ],
// [ 7, 8, 9 ]
// ] );

// returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7

function sum(matrix) {
  let sum = 0;
  if (!matrix.length) return 0;
  for (var i = 0, k = matrix[i].length - 1; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; i++) {
      sum += matrix[i][j++] + matrix[i][k--];
    }
  }
  return sum;
}

//OU

const sum = (matrix) =>
  matrix.reduce(
    (sum, line, i) => sum + line[i] + line[matrix.length - i - 1],
    0
  );

//OU

function sum(matrix) {
  const n = matrix.length;

  return matrix.reduce((s, ar, i) => s + ar[i] + ar[n - i - 1], 0);
}

//OU

const sum = (matrix) =>
  matrix.reduce((pre, val, idx) => pre + val[idx] + val[val.length - ++idx], 0);

//OU

function sum(matrix) {
  var s = 0;
  for (var i = 0; i < matrix.length; i++)
    s += matrix[i][i] + matrix[matrix.length - 1 - i][i];
  return s;
}

//OU

function sum(matrix) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }
  var reverse = matrix.reverse();
  for (var b = 0; b < matrix.length; b++) {
    sum += reverse[b][b];
  }
  return sum;
}

//OU

const sum = (arr) =>
  arr.length === 0
    ? 0
    : [
        ...arr.map((el, i) => arr[i][i]),
        ...arr.reverse().map((el, i) => arr[i][i]),
      ].reduce((a, b) => a + b);
