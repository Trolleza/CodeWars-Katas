// 7kyu - Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.

function factorial(n) {
  if (n < 0 || n > 12) {
    throw RangeError;
  }
  for (var temp = 1; n > 1; n--) temp *= n;
  return temp;
}

//OU

function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError("O número deve ser entre 1 e 12");
  return n ? n * factorial(n - 1) : 1;
}

//OU

function factorial(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 6;
  if (n === 11) return 39916800;
  if (n === 7) return 5040;
  if (n === 5) return 120;
  if (n === 4) return 24;
  if (n === 8) return 40320;
  if (n === 6) return 720;
  if (n === 10) return 3628800;
  if (n === 12) return 479001600;
  if (n === 9) return 362880;
  if (n > 12 || n < 0) {
    throw new RangeError();
  }
}

//OU

function factorial(n) {
  if (n < 0 || n > 12) throw RangeError();
  let f = 1;
  while (n > 1) f *= n--;
  return f;
}

//OU

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("The argument must be between 1 and 12.");
  }

  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
