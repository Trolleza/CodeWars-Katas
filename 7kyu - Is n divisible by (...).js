//7kyu - Is n divisible by (...)?

// Create a function isDivisible(n,...) that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

// Example:

// isDivisible(6,1,3) --> true because 6 is divisible by 1 and 3
// isDivisible(12,2) --> true because 12 is divisible by 2
// isDivisible(100,5,4,10,25,20) --> true
// isDivisible(12,7) --> false because 12 is not divisible by 7

function isDivisible(n) {
  for (let i = 1; i < arguments.length; i++) if (n % arguments[i]) return false;
  return true;
}

//OU

function isDivisible(n, ...rest) {
  for (let i = 0; i < rest.length; i++) {
    if (n % rest[i]) return false;
  }
  return true;
}

//OU

function isDivisible(firstN, ...otherN) {
  //ELE MUDOU OS PARÂMETROS!!! VOCÊ PODE FAZER ISSO.
  return otherN.every((n) => firstN % n === 0);
}

//OU

const isDivisible = (n, ...xs) => xs.every((x) => n % x == 0);

//OU

function isDivisible(n, ...args) {
  for (const num of args) {
    if (n % num !== 0) return false;
  }
  return true;
}
