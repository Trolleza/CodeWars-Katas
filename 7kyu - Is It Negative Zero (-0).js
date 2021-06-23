//7kyu - Is It Negative Zero (-0)

// There exist two zeroes: +0 (or just 0) and -0.

// Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

// In JavaScript / TypeScript / Coffeescript the input will be a number.

// In Python / Java / C / NASM / Haskell / the input will be a float.

const isNegativeZero = n => (n === 0 && Infinity / n < 0) ? true : false;

//OU

function isNegativeZero(n) {
  console.log(n)
  if( n === 0) {
  return Object.is(-0, n) 
  }
  return false;
  }

//OU

function isNegativeZero(n) {
  if(n !== -0 && n !== 0 ) { return false;} 
    else if (1/n > 0) { return false;}
    else {return true;}
}