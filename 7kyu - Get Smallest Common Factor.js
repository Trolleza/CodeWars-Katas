// 7kyu - Get Smallest Common Factor

// Given an array of integers, return the smallest common factors of all integers in the array.

// When i say Smallest Common Factor i mean the smallest number above 1 that can divide all numbers in the array without a remainder.

// scf([200, 30, 18, 8, 64, 34]) //=> 2
// scf([21, 45, 51, 27, 33]) //=> 3
// scf([133, 147, 427, 266]) //=> 7
// If there are no common factors above 1, return 1 (technically 1 is always a common factor).

function scf(array) {
  for (var i = 2; i < Math.max(...array); i++) {
    if (array.every((x) => x % i === 0)) {
      return i;
    }
  }
  return 1;
}

//OU

function scf(a) {
  for (var i = 2; i < Math.max(...a); i++) {
    if (a.every((x) => !(x % i))) return i;
  }

  return 1;
}

//OU

function scf(arr) {
  for (let i = 2; i < Math.max(...arr); i++) {
    if (arr.every((e) => e % i === 0)) {
      return i;
    }
  }
  return 1;
}
