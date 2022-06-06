// 7kyu - Find the divisors!

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
  let divisible = [];
  for (let i = 2; i <= Math.floor(integer / 2); i++) {
    if (integer % i === 0) divisible.push(i);
  }
  return divisible.length ? divisible : integer + " is prime";
}

//OU

function divisors(integer) {
  var divisors = [];
  for (var i = 2; i < integer - 1; i++) {
    if (integer % i === 0) divisors.push(i);
  }
  if (divisors.length === 0) return "" + integer + " is prime";
  return divisors;
}

//OU

function divisors(integer) {
  for (var res = [], i = 2; i < integer - 1; i++) {
    if (integer % i == 0) res.push(i);
  }

  return res.length ? res : integer + " is prime";
}

//OU

function divisors(integer) {
  var matched = [],
    i = 1;

  while (++i < integer) {
    integer % i !== 0 || matched.push(i);
  }

  return matched.length <= 1 ? integer + " is prime" : matched;
}

//OU

const divisors = (integer) => {
  const numberDivisors = [];

  for (let i = 2; i < integer; i++)
    if (integer % i === 0) numberDivisors.push(i);

  return numberDivisors.length > 0 ? numberDivisors : `${integer} is prime`;
};
