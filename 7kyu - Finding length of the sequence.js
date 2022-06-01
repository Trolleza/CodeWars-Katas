// 7kyu - Finding length of the sequence

// As part of this Kata, you need to find the length of the sequence in an array, between the first and the second occurrence of a specified number.

// For example, for a given array arr

// [0, -3, 7, 4, 0, 3, 7, 9]

// Finding length between two 7s like

// lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)

// would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0, or in Haskell, Nothing.

// Sample Tests:
// Test.assertEquals(lengthOfSequence([1, 1], 1), 2, 'Returns two when there are only two elements in the array');
// Test.assertEquals(lengthOfSequence([1, 2, 3, 1], 1), 4, 'Returns four for an array of length four and the number to be searched at the boundaries');
// Test.assertEquals(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5), 5, 'Returns five');
// Test.assertEquals(lengthOfSequence([-7, 6, 2, -7, 4], -7), 4, 'Returns four');

let lengthOfSequence = (arr, n) =>
  arr.filter((v) => v === n).length == 2
    ? arr.lastIndexOf(n) - arr.indexOf(n) + 1
    : 0;

//OU

function lengthOfSequence(arr, n) {
  var a = arr.indexOf(n);
  var b = arr.indexOf(n, a + 1);
  var c = arr.lastIndexOf(n);
  return a < 0 || b < 0 || b != c ? 0 : 1 + b - a;
}

//OU

var lengthOfSequence = function (arr, n) {
  var hits = arr.filter((i) => i === n).length;
  return hits === 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
};

//OU

var lengthOfSequence = function (arr, n) {
  if (arr.filter((el) => el == n).length !== 2) return 0;
  return arr.lastIndexOf(n) - arr.indexOf(n) + 1;
};

//OU

var lengthOfSequence = function (arr, n) {
  return arr.filter((e) => e == n).length != 2
    ? 0
    : arr.slice(arr.indexOf(n), arr.lastIndexOf(n)).length + 1;
};
