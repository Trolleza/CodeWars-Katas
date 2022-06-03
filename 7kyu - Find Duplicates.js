// 7kyu - Find Duplicates

// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).
// Examples

// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []

// Sample Tests:
// Test.expect(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']).length === 3, 'Nope, try again');
// Test.expect(duplicates([0, 1, 2, 3, 4, 5]).length === 0, 'Nope, try again');

function duplicates(arr) {
  let x = [];
  let y = [];

  arr.forEach((i) => {
    if (x.includes(i) === false) return x.push(i);
    if (x.includes(i) && y.includes(i) === false) return y.push(i);
  })

  return y
}

//OU

function duplicates(arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] === arr[k]) {
        a.includes(arr[i]) ? a : a.push(arr[i]);
      }
    }
  }
  return a;
}

//OU

function duplicates(arr) {
  return arr.reduce(function (prev, cur, i, a) {
    if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
      prev.push(cur);
    }
    return prev;
  }, []);
}

//OU

function duplicates(arr) {
  return arr.filter((el, i) => i !== arr.indexOf(el) && i === arr.indexOf(el, arr.indexOf(el) + 1))
  };
}

//OU

const duplicates = arr => [...new Set(arr.filter((x, i) => arr.indexOf(x) != i))];
