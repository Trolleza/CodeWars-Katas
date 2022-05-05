// 7kyu - Flatten and sort an array

// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:
// Please, keep in mind, that JavaScript is by default sorting objects alphabetically.

// Sample Tests:
// Test.assertSimilar(flattenAndSort([]), []);
//   Test.assertSimilar(flattenAndSort([[], []]), []);
//   Test.assertSimilar(flattenAndSort([[], [1]]), [1]);
//   Test.assertSimilar(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   Test.assertSimilar(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);

function flattenAndSort(array) {
  let concatenado = [].concat(...array);
  return concatenado.sort((a, b) => a - b);
}

//OU

function flattenAndSort(array) {
  return array
    .reduce((result, current) => [...result, ...current], [])
    .sort((a, b) => a - b);
}

//OU

function flattenAndSort(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      newArray.push(array[i][j]);
    }
  }

  return newArray.sort((a, b) => a - b);
}

//OU

const flattenAndSort = (array) =>
  array
    .toString()
    .split(",")
    .filter((e) => e)
    .map(Number)
    .sort((a, b) => a - b);
