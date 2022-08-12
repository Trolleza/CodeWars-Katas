// 7kyu - Dominant Array Elements

// Description:

// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All numbers will be greater than 0.

// More examples in the test cases.

// Sample Tests:
// Test.assertDeepEquals(solve([16,17,14,3,14,5,2]),[ 17,14,5,2]);
// Test.assertDeepEquals(solve([ 92,52,93,31,89,87,77,105]),[105]);
// Test.assertDeepEquals(solve([ 75,47,42,56,13,55]), [75,56,55]);
// Test.assertDeepEquals(solve([ 67,54,27,85,66,88,31,24,49]),[88,49]);
// Test.assertDeepEquals(solve([ 76,17,25,36,29]),[76,36,29]);
// Test.assertDeepEquals(solve([ 104,18,37,9,36,47,28]),[104,47,28]);

function solve(arr) {
  return arr.filter((a, i) => arr.slice(i + 1).every((b) => b < a));
}

//OU

function solve(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > Math.max(...arr.slice(i + 1, arr.length))) result.push(arr[i]);
  }
  return result;
}

//OU

function solve(arr) {
  return arr.filter((n, i) => n > Math.max(...arr.slice(i + 1)));
}

//OU

function solve(arr) {
  let array = [arr[arr.length - 1]];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > array[0]) array.unshift(arr[i]);
  }
  return array;
}
