// 7kyu - Even odd disparity

// Description:

// Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

// For example:
// solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.

// Let's now add two letters to the last example:

// solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters.

// The input will be an array of lowercase letters and numbers only.

// In some languages (Haskell, C++, and others), input will be an array of strings:

// solve ["0","1","2","3","a","b"] = 0

// Good luck!

function solve(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++)
    if (typeof a[i] == "number") {
      if (a[i] % 2 == 0) count++;
      else count--;
    }
  return count;
}

//OU

function solve(a) {
  let theEvens = a.filter((number) => number % 2 == 0);
  let theOdds = a.filter((number) => number % 2 == 1);
  return theEvens.length - theOdds.length;
}

//OU

function solve(a) {
  return (
    a.filter((b) => b % 2 === 0).length - a.filter((c) => c % 2 === 1).length
  );
}

//OU

function solve(a) {
  return a.reduce(
    (x, y) => (Number.isInteger(y) ? (y % 2 === 0 ? x + 1 : x - 1) : x),
    0
  );
}

//OU

function solve(a) {
  let odd = 0,
    even = 0;
  a.map((x) => {
    if (!isNaN(x)) {
      if (x % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  });
  return even - odd;
}

//OU

function solve(a) {
  return (
    a.filter((x) => x % 2 === 0).length - a.filter((x) => x % 2 === 1).length
  );
}

//OU

function solve(a) {
  let newArray = a.filter((e) => typeof e === "number");
  let evenArr = [];
  let oddArr = [];
  newArray.forEach((n) => {
    if (n % 2 === 0) {
      evenArr.push(n);
    } else if (n % 2 !== 0) {
      oddArr.push(n);
    }
  });

  let evenN = evenArr.length;
  let oddN = oddArr.length;
  let result = evenN - oddN;
  return result;
}

//OU

function solve(a) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] == "number" && a[i] % 2 == 1) {
      odd++;
    } else if (typeof a[i] == "number" && a[i] % 2 == 0) {
      even++;
    }
  }
  return even - odd;
}
