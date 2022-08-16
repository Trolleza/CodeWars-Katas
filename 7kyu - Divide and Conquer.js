// 7kyu - Divide and Conquer

// Description:

// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

// Sample Tests:
// assert.strictEqual(divCon([9, 3, '7', '3']), 2);
//     assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
//     assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13);

function divCon(x) {
  let number = 0;
  let string = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] == "number") {
      number += x[i];
    } else if (typeof x[i] == "string") {
      string += parseFloat(x[i]);
    }
  }
  return number - string;
}

//OU

let divCon = (n) => n.reduce((s, v) => s + (v === +v ? v : -v), 0);

//OU

function divCon(x) {
  return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
    0
  );
}

//OU

function divCon(x) {
  var s = 0;
  for (let i = 0; i < x.length; i++) {
    var n = x[i];
    if (Number.isInteger(n)) s += n;
    else s -= parseInt(n);
  }
  return s;
}
