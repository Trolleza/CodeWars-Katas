//7kyu - Knight's tour problem on (N x M) desk

// In this Kata your task is to check the possibility to solve the 'Knight's tour problem' for the desk of the current size.

// A knight's tour is a sequence of moves of a knight on a chessboard such that the knight visits every square exactly once. If the knight ends on a square that is one knight's move away from the beginning square (so that it could tour the board again immediately, following the same path), the tour is closed; otherwise, it is open.

// In this Kata we will think only about open tours.

// Input
// n, m - desk size.

// 0 < n < 10.

// 0 < m < 10.

// Output
// Return true if a tour exist for the current desk. Otherwise return false

// Sample Tests:
// // n x n
// it(`should check (1 x 1) desk size`, () => {
//   assert.deepEqual(check(1, 1), false)
// });
// it(`should check (2 x 2) desk size`, () => {
//   assert.deepEqual(check(2, 2), false)
// });
// it(`should check (3 x 3) desk size`, () => {
//   assert.deepEqual(check(3, 3), false)
// });
// it(`should check (4 x 4) desk size`, () => {
//   assert.deepEqual(check(4, 4), false)
// });
// it(`should check (5 x 5) desk size`, () => {
//   assert.deepEqual(check(5, 5), true)
// });
// it(`should check (6 x 6) desk size`, () => {
//   assert.deepEqual(check(6, 6), true)
// });
// it(`should check (7 x 7) desk size`, () => {
//   assert.deepEqual(check(7, 7), true)
// });
// it(`should check (8 x 8) desk size`, () => {
//   assert.deepEqual(check(8, 8), true)
// });
// it(`should check (9 x 9) desk size`, () => {
//   assert.deepEqual(check(9, 9), true)
// });

// // some n x m
// it(`should check (2 x 5) desk size`, () => {
//   assert.deepEqual(check(2, 5), false)
// });
// it(`should check (2 x 7) desk size`, () => {
//   assert.deepEqual(check(2, 7), false)
// });
// it(`should check (3 x 5) desk size`, () => {
//   assert.deepEqual(check(3, 5), false)
// });
// it(`should check (3 x 7) desk size`, () => {
//   assert.deepEqual(check(3, 7), true)
// });
// it(`should check (4 x 5) desk size`, () => {
//   assert.deepEqual(check(4, 5), true)
// });
// it(`should check (4 x 7) desk size`, () => {
//   assert.deepEqual(check(4, 7), true)
// });
// it(`should check (5 x 7) desk size`, () => {
//   assert.deepEqual(check(5, 7), true)
// });
// it(`should check (6 x 5) desk size`, () => {
//   assert.deepEqual(check(6, 5), true)
// });
// it(`should check (7 x 5) desk size`, () => {
//   assert.deepEqual(check(7, 5), true)
// });

let check = (n, m) => n * m >= 20 || [m, n].sort().join('') === "34";

//OU

function check(n, m) {
  if ( m > n ) { [n, m] = [m, n] }
  return m === 3 && (n === 4 || n >= 7) || m === 4 && n >= 5 || m > 4
}

//OU

function check(n, m) {
  if (n * m >= 20) {
    return true;
  }
  else if (n == 4 && m == 3){
    return true;
  }
  else if (n == 3 && m == 4){
    return true;
  }
  else {
    return false;
  }
}

//OU

const check = (n, m) => Boolean([
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [0, 0, 0, 0, 1, 0, 0, 1, 1, 1 ],
  [0, 0, 0, 1, 0, 1, 1, 1, 1, 1 ],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1 ],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1 ],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1 ],
]
[n][m]);

//OU

function check(n, m) {
  let check = true;
  if ((m < 5 && n < 5) || m < 4 || n < 4) check = false;
  if(([4, 7, 8, 9].includes(m) && n === 3)||([4, 7, 8, 9].includes(n) && m === 3)) check = true;
  return check;
}