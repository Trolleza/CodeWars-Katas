//7kyu - Last Survivor

// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

// Sample Tests:
// describe("Sample", function () {
//   it("given 'abc' and [1, 1] ", function () {
//      assert.deepEqual(lastSurvivor('abc', [1, 1]), 'a');
//   });

//   it("given 'kbc' and [0, 1]", function () {
//      assert.deepEqual(lastSurvivor('kbc', [0, 1]), 'b');
//   });

//   it("given 'zbk' and [2, 1]", function () {
//      assert.deepEqual(lastSurvivor('zbk', [2, 1]), 'z');
//   });

//   it("given 'zbk' and [2, 1]", function () {
//      assert.deepEqual(lastSurvivor('c', []), 'c');
//   });
// });

function lastSurvivor(letters, coords) {
  letters = letters.split("");
  for (let i = 0; i < coords.length; i++) {
    letters.splice(coords[i], 1);
  }
  return letters.join("");
}

//OU

function lastSurvivor(string, indices) {
  const arr = [...string];
  for (let i of indices) arr.splice(i, 1);
  return arr[0];
}

//OU

function lastSurvivor(letters, coords) {
  let result = letters.split("");
  for (let i of coords) {
    result.splice(i, 1);
  }
  return result.join("");
}

//OU

function lastSurvivor(letters, coords) {
  for (let c of coords) letters = letters.substr(0, c) + letters.substr(c + 1);
  return letters;
}

//OU

function lastSurvivor(letters, coords) {
  return coords.reduce((letters, coords) => {
    letters.splice(coords, 1);
    return letters;
  }, letters.split(""))[0];
}

//OU

function lastSurvivor(letters, coords) {
  for (let x of coords) letters = letters.slice(0, x) + letters.slice(x + 1);
  return letters;
}

//OU

const lastSurvivor = (letters, coords) =>
  [...coords].reduce(
    (coords, c) => [...coords].filter((e, i) => i !== c),
    letters
  )[0];
