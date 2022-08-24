// 7kyu - Digitize

// Description:

// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]

function digitize(n) {
  return String(n).split("").map(Number);
}

//OU

function digitize(n) {
  return n.toString().split("").map(Number);
}

//OU

const digitize = ($) => [...String($)].map(Number);

//OU

function digitize(n) {
  let string = String(n);
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(Number(string[i]));
  }
  return arr;
}

//OU

digitize = (n) => [...("" + n)].map((t) => +t);

//OU

function digitize(n) {
  return n
    .toString()
    .split("")
    .map((item) => +item);
}

//OU

function digitize(n) {
  return [...(n + "")].map(Number);
}
