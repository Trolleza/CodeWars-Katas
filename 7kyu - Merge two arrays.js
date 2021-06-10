//7kyu - Merge two arrays

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

// Sample Tests:
// describe('Static Tests', function () {

//   it('Passes if arrays are equals', function () {

//     Test.assertSimilar(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
//     Test.assertSimilar(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
//     Test.assertSimilar(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']), [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
//     Test.assertSimilar(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]), ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);
//     });
// });

function mergeArrays(a, b) {
  let combinedArray = [];
  let originaLength = a.length; // keep the original arrya because by using the shifts we are gonna the change the length and the array and we want to run the for loop for as many items as is the length of the original (a)
  for (let i = 0; i < originaLength; i++) {
    combinedArray.push(a.shift()); // remove the first element and push it in the combinedArray.
    if (b.length > 0) {
      combinedArray.push(b.shift());
    }
  }
  if (b.length > 0) {
    combinedArray = combinedArray.concat(b);
  }
  return combinedArray;
}

//OU

function mergeArrays(a, b) {
  let returnArray = [];
  let counter = 0;
  while (a[counter] || b[counter]) {
    if (a[counter]) {
      returnArray.push(a[counter]);
    }
    if (b[counter]) {
      returnArray.push(b[counter]);
    }
    counter++;
  }
  return returnArray;
}

//OU

function mergeArrays(a, b) {
  let j = [];
  let longest = a.length > b.length ? a : b;
  for (let i = 0; i < longest.length; i++) {
    if (a[i]) j.push(a[i]);
    if (b[i]) j.push(b[i]);
  }
  return j;
}

//OU

function mergeArrays(a, b) {
  let answer = [];

  for (i = 0; i < Math.max(a.length, b.length); i++) {
    if (i < a.length) {
      answer.push(a[i]);
    }
    if (i < b.length) {
      answer.push(b[i]);
    }
  }
  return answer;
}

//OU

function mergeArrays(a, b) {
  let res = [];
  let i = 0;
  while (i < a.length || i < b.length) {
    if (i < a.length) res.push(a[i]);
    if (i < b.length) res.push(b[i]);
    i++;
  }
  return res;
}

//OU

function mergeArrays(a, b) {
  let answer = [];

  for (let i = 0; a[i] || b[i]; i++) {
    if (a[i]) {
      answer.push(a[i]);
    }
    if (b[i]) {
      answer.push(b[i]);
    }
  }
  return answer;
}
