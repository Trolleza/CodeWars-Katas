// 7kyu - Loose Change!

// You've been collecting change all day, and it's starting to pile up in your pocket, but you're too lazy to see how much you've found.

// Good thing you can code!

// Create change_count() to return a dollar amount of how much change you have!

// Valid types of change include:
// penny: 0.01
// nickel: 0.05
// dime: 0.10
// quarter: 0.25
// dollar: 1.00

// These amounts are already preloaded as floats into the CHANGE object for you to use!

// You should return the total in the format $x.xx.

// Examples:
// changeCount('nickel penny dime dollar') == '$1.16'
// changeCount('dollar dollar quarter dime dime') == '$2.45'
// changeCount('penny') == '$0.01'
// changeCount('dime') == '$0.10'

function changeCount(change) {
  let arr = change.split(" ");
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += CHANGE[arr[i]];
  }
  return `$${total.toFixed(2)}`;
}

//OU

function changeCount(change) {
  let sum = 0;
  let arr = change.split(" ");

  for (i of arr) {
    sum += CHANGE[i];
  }
  return "$" + sum.toFixed(2);
}

//OU

function changeCount(change) {
  return `$${change
    .split(" ")
    .map((x) => CHANGE[x])
    .reduce((a, b) => a + b, 0)
    .toFixed(2)}`;
}

//OU

function changeCount(change) {
  let total = change.split(" ").reduce((c, v) => c + CHANGE[v], 0);
  return "$" + total.toFixed(2);
}

//OU

function changeCount(change) {
  let arr = change.split(" ");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "penny") sum += 0.01;
    if (arr[i] == "nickel") sum += 0.05;
    if (arr[i] == "dime") sum += 0.1;
    if (arr[i] == "quarter") sum += 0.25;
    if (arr[i] == "dollar") sum += 1;
  }
  return "$" + sum.toFixed(2);
}
