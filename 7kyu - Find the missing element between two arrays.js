// 7kyu - Find the missing element between two arrays

// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2

// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8

// The first array will always have at least one element.

function findMissing(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return arr1[i];
  }
}

//OU

function findMissing(arr1, arr2) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
}

//OU

const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const findMissing = (arr1, arr2) => sum(arr1) - sum(arr2);

//OU

function findMissing(arr1, arr2) {
  return arr1.sort().filter((e, i) => arr2.sort()[i] !== e)[0];
}

//OU

function findMissing(arr1, arr2) {
  let sum1 = 0,
    sum2 = 0;

  arr1.map((i) => (sum1 += i));
  arr2.map((i) => (sum2 += i));

  return sum1 - sum2;
}

//OU

function findMissing(arr1, arr2) {
  const sum = (a, b) => a + b;
  return arr1.reduce(sum) - (arr2.length ? arr2.reduce(sum) : 0);
}
