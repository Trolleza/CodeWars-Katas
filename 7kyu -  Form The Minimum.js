// 7kyu -  Form The Minimum

// Task:
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
//Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

//Exemples:
// minValue ({1, 3, 1})  ==> return (13)
// minValue({5, 7, 5, 9, 7})  ==> return (579)

// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

// More Exemples:
// assert.strictEqual(minValue([1, 3, 1]), 13);
//     assert.strictEqual(minValue([4, 7, 5, 7]), 457);
//     assert.strictEqual(minValue([4, 8, 1, 4]), 148);
//     assert.strictEqual(minValue([5, 7, 9, 5, 7]), 579);
//     assert.strictEqual(minValue([6, 7, 8, 7, 6, 6]), 678);
//     assert.strictEqual(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
//     assert.strictEqual(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
//     assert.strictEqual(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
//     assert.strictEqual(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);

function minValue(values) {
  return +[...new Set(values)].sort().join("");
}

//OU

function minValue(values) {
  const arrumado = values
    .filter((e, i, arr) => arr.indexOf(e) === i)
    .sort()
    .join("");
  return +arrumado;
}

//OU

function minValue(values) {
  var uniq = values.filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  });
  return parseInt(uniq.sort().join(""));
}

//OU

function minValue(values) {
  return +Array.from(new Set(values)).sort().join("");
}
