// 7kyu -  Guess the Sequence

// You have read the title: you must guess a sequence. It will have something to do with the number given.

// Example
// x = 16

// result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]

// Sample Tests:
// const result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
// const x = 16

// const result = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const x = 9

function sequence(x) {
  return [...Array(x).keys()].map((item) => item + 1).sort();
}

//OU

function sequence(x) {
  let array = [];
  for (let i = 1; i <= x; i++) array.push(i);
  return array.sort();
}
