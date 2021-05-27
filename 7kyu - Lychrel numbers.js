// 7kyu - Lychrel numbers

// Write a function, howManyIterationsNeeded , which takes a number n as its first parameter, and returns the number of times step 2 is performed before n becomes palindromic. Note that step 2 should be perfomed at least once.

// If, for a given n , the algorithm does not terminate after a reasonable number of iterations, your function should return null . What is 'reasonable' depends on how much Lychrel hunting power you have, so your function should be able to take an optional second (numerical) parameter, maxIter , which is the limit of how many times to perform step 2 before returning null .

// ##Example: To reach a palindrome from 67 requires 2 iterations of step 2:

// n(0) = 67
// n(1) = 143 (67+76)
// n(2) = 484 (143+341)
// After the second iteration, we have reached a palindrome, since 484 reversed is 484.
// So, howManyIterationsNeeded(67) should return 2.

// ##Notes:

// Your function does not need to deal with values of n greater than 10600.

function howManyIterationsNeeded(num, maxIter = 10000) {
  function reverse(n) {
    return parseInt(n.toString().split("").reverse().join(""));
  }

  for (let i = 1; i <= maxIter; i++) {
    num += reverse(num);
    if (num == reverse(num)) return i;
  }
  return null;
}

//OU

function howManyIterationsNeeded(num, maxIter = 50) {
  for (let i = 0; i <= maxIter; i++) {
    const reverse = +[...(num + "")].reverse().join("");
    if (num === reverse && i > 0) return i;
    num += reverse;
  }
  return null;
}

//OU

function howManyIterationsNeeded(n, m = 25) {
  const f = (n) => +[...(n + "")].reverse().join("");
  for (let i = 1; i <= m; i++) {
    n += f(n);
    if (n === f(n)) return i;
  }
  return null;
}

//OU

function howManyIterationsNeeded(num, maxIter = 500) {
  for (let i = 0; i <= maxIter; ++i) {
    const s = num.toString();
    const r = [...s].reverse().join("");

    if (i && s == r) return i;
    num += +r; //O + transforma em NÚMERO!
  }
  return null;
}
