// 7kyu - Fizz Buzz

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

//     If the value is a multiple of 3: use the value "Fizz" instead
//     If the value is a multiple of 5: use the value "Buzz" instead
//     If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n) {
  let arr = [];
  for (let i = n; i > 0; i--) {
    i % 3 === 0 && i % 5 === 0
      ? arr.unshift("FizzBuzz")
      : i % 3 === 0
      ? arr.unshift("Fizz")
      : i % 5 === 0
      ? arr.unshift("Buzz")
      : arr.unshift(i);
  }
  return arr;
}

//OU

function fizzbuzz(n) {
  let i = 1;
  let arr = [];
  while (i <= n) {
    let fizz = i % 3 == 0;
    let buzz = i % 5 == 0;
    if (fizz || buzz) arr.push((fizz ? "Fizz" : "") + (buzz ? "Buzz" : ""));
    else arr.push(i);
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;

//OU

function fizzbuzz(n) {
  let i = 1,
    arr = [];
  while (i <= n) {
    let fizz = i % 3 == 0;
    let buzz = i % 5 == 0;
    if (fizz || buzz) arr.push((fizz ? "Fizz" : "") + (buzz ? "Buzz" : ""));
    else arr.push(i);
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;

//OU

function fizzify(i) {
  if (i % 15 == 0) return "FizzBuzz";
  else if (i % 5 == 0) return "Buzz";
  else if (i % 3 == 0) return "Fizz";
  else return i;
}

// Return an array
function fizzbuzz(n) {
  var res = [];
  for (var i = 1; i <= n; ++i) res.push(fizzify(i));
  return res;
}

//OU

function fizzbuzz(n) {
  var out = [];
  for (var i = 1; i <= n; i++) {
    var res = "";
    if (i % 3 == 0) res += "Fizz";
    if (i % 5 == 0) res += "Buzz";
    out.push(res.length == 0 ? i : res);
  }
  return out;
}
var fizzify = fizzbuzz;

//OU

function fizzbuzz(n) {
  var arr = [],
    Fizz,
    Buzz,
    i;
  for (i = 1; i <= n; i++) {
    Fizz = i % 3 == 0 ? "Fizz" : "";
    Buzz = i % 5 == 0 ? "Buzz" : "";
    arr.push(Fizz || Buzz ? Fizz + Buzz : i);
  }
  return arr;
}
var fizzify = fizzbuzz;
