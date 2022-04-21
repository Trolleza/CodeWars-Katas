// 7kyu -  GCD Sum

// Given the sum and gcd of two numbers, return those two numbers in ascending order. If the numbers do not exist, return -1, (or NULL in C, tuple (-1,-1) in C#, pair (-1,-1) in C++,None in Rust, array {-1,-1} in Java and Golang).

//For example:
//Given sum = 12 and gcd = 4...

//solve(12,4) = [4,8]. The two numbers 4 and 8 sum to 12 and have a gcd of 4.

//solve(12,5) = -1. No two numbers exist that sum to 12 and have gcd of 5.

// solve(10,2) = [2,8]. Note that [4,6] is also a possibility but we pick the one with the lower first element: 2 < 4, so we take [2,8].

// More examples in test cases.
// Good luck!

// assert.deepEqual(solve(6,3), [3,3]);
// assert.deepEqual(solve(8,2), [2,6]);
// assert.deepEqual(solve(10,3), -1);
// assert.deepEqual(solve(12,4), [4,8]);
// assert.deepEqual(solve(12,5), -1);

function solve(x, y) {
  return x % y ? -1 : [y, x - y];
}

//OU

let solve = (s, g) => {
  return !(s % g) ? [g, s - g] : -1;
};

//OU

function solve(sum, gcd) {
  let result = [];
  if (sum % gcd != 0) {
    return -1;
  } else {
    result.push(gcd);
    result.push(sum - gcd);
    return result;
  }
}

//OU

function solve(s, g) {
  if (s % g == 0) {
    return [g, s - g];
  } else {
    return -1;
  }
}

//OU

function solve(s, g) {
  let num2 = s - g;
  let num1 = g;
  return num2 % g === 0 ? [g, num2] : -1;
}
