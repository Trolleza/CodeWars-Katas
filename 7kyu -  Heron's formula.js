// 7kyu -  Heron's formula

// Write function heron which calculates the area of a triangle with sides a, b, and c.

// Heron's formula: sqrt (s * (s - a) * (s - b) * (s - c)), where s = (a + b + c) / 2. Output should have 2 digits precision.

function heron(a, b, c) {
  let x = (a + b + c) / 2;
  return Math.sqrt(x * (x - a) * (x - b) * (x - c));
}

//OU

function heron(...$) {
  $ = [...$];
  let S = ($[0] + $[1] + $[2]) / 2;
  return +Math.sqrt(S * (S - $[0]) * (S - $[1]) * (S - $[2])).toFixed(2);
}

//OU

const heron = (...sides) => {
  const [a, b, c] = sides;
  const s = (a + b + c) / 2;

  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

//OU

function heron() {
  let arr = [];

  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }

  let s = (arr[0] + arr[1] + arr[2]) / 2;

  return Math.sqrt(s * (s - arr[0]) * (s - arr[1]) * (s - arr[2]));
}
