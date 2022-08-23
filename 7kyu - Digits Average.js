// 7kyu - Digits Average

// Description:

// Given an integer, take the (mean) average of each pair of consecutive digits. Repeat this process until you have a single integer, then return that integer. e.g.

// Note: if the average of two digits is not an integer, round the result up (e.g. the average of 8 and 9 will be 9)
// Examples

// digitsAverage(246)  ==>  4

// original: 2   4   6
//            \ / \ /
// 1st iter:   3   5
//              \ /
// 2nd iter:     4
// average of 2 and 4 is 3, average of 4 and 6 is 5
// so after first iteration 246 => 35
// average of 3 and 5 is 4
// so digitsAverage(246) returns 4

// digitsAverage(89)  ==>  9

// original: 8   9
//            \ /
// 1st iter:   9
// average of 8 and 9 is 8.5 ==> return 9

function digitsAverage(input) {
  if (input < 10) {
    return input;
  }
  while (input > 9) {
    input = String(input);
    let arr = [];
    for (let i = 0; i < input.length - 1; i++)
      arr.push(Math.round((+input[i] + +input[i + 1]) / 2));
    input = parseInt(arr.join(""));
    if (input < 10) return input;
  }
}

//OU

function digitsAverage(input) {
  let a = [...input.toString()].map(Number);
  const reduce = (a) => a.slice(1).map((n, i) => Math.ceil((n + a[i]) / 2));
  while (a.length > 1) {
    a = reduce(a);
  }
  return a[0];
}

//OU

const digitsAverage = (input) =>
  input > 9
    ? digitsAverage(
        +[...`${input}`]
          .map((val, idx, arr) => (++val + +arr[--idx]) >> 1)
          .join(``)
      )
    : input;

//OU

const digitsAverage = (n) => {
  let answer = n + "";
  while (answer.length > 1) {
    let nn = "";
    for (let i = 0; i < answer.length - 1; i++) {
      nn += Math.ceil((+answer[i] + +answer[i + 1]) / 2);
    }
    answer = nn;
  }
  return +answer;
};

//OU

digitsAverage = d = (s) =>
  s < 10
    ? s
    : d(
        +[...(s += "").slice(1)].reduce(
          (a, b, i) => a + ((+b + +s[i] + 1) >> 1),
          ""
        )
      );

//OU

function digitsAverage(input) {
  let nums = [...("" + input)].map(Number);
  while (nums.length > 1) {
    nums = nums.slice(1).map((a, i) => Math.ceil((a + nums[i]) / 2));
  }
  return nums[0];
}
