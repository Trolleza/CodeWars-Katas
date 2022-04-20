// 7kyu -  Game Hit the target

// given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
//There will be only 1 arrow '>' and 1 target 'x'
//An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"

//Examples:

// given matrix 4x4:
// [
// [' ', ' ', ' ', ' '],
// [' ', ' ', ' ', ' '], --> return true
// [' ', '>', ' ', 'x'],
// [' ', ' ', ' ', ' ']
// ]
// given matrix 4x4:
// [
// [' ', ' ', ' ', ' '],
// [' ', '>', ' ', ' '], --> return false
// [' ', ' ', ' ', 'x'],
// [' ', ' ', ' ', ' ']
// ]

// given matrix 4x4:
// [
// [' ', ' ', ' ', ' '],
// [' ', 'x', '>', ' '], --> return false
// [' ', '', ' ', ' '],
// [' ', ' ', ' ', ' ']
// ]

// In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
// Happy hacking as they say!

function solution(mtrx) {
  let arr = mtrx.filter((el) => el.includes(">") && el.includes("x"))[0] || [];
  return arr.indexOf(">") < arr.indexOf("x");
}

//OU

const solution = (mtrx) => {
  for (let row of mtrx) {
    let target = row.indexOf("x");
    let scope = row.indexOf(">");
    if (target > -1 && scope > -1 && target > scope) return true;
  }
  return false;
};

//OU

const solution = (mtrx) => {
  return mtrx.map((e) => e.join(" ").replace(/\s/g, "") == ">x").includes(true);
};

//OU

const solution = (mtrx) =>
  mtrx.some(
    (el) =>
      el.includes(">") && el.includes("x") && el.indexOf(">") < el.indexOf("x")
  );

//OU

const solution = (mtrx) => {
  for (let i = 0; i < mtrx.length; i++) {
    const x = mtrx[i].indexOf("x");
    const arrow = mtrx[i].indexOf(">");

    if (arrow === -1 && x === -1) continue;
    if (arrow < x && x !== -1 && arrow !== -1) {
      return true;
    } else return false;
  }
};
