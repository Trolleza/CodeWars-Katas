// 7kyu -  Four/Seven

// Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).

// There are some very simple ways of answering this problem, but I encourage you to try and be as creative as possible.

// Good Luck!

function fourSeven(n) {
  let results = {
    7: 4,
    4: 7,
  };
  return results[n] || 0;
}

//OU

function fourSeven(n) {
  return (n === 7 && 4) || (n === 4 && 7) || 0;
}

//OU

function fourSeven(n) {
  return { 7: 4, 4: 7 }[n] || 0;
}

//OU

function fourSeven(n) {
  while (n === 4) return 7;
  while (n === 7) return 4;
  return 0;
}

//OU

function fourSeven(n) {
  while (n == 7 || n == 4) {
    return 28 / n;
  }
  return 0;
}

//OU

function fourSeven(n) {
  return fourSeven.nums[n] || fourSeven.nums["default"];
}
fourSeven.nums = {
  4: 7,
  7: 4,
  default: 0,
};
