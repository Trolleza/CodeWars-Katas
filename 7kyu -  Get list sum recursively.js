// 7kyu -  Get list sum recursively

//Write function sumR which returns the sum of values in a given list. Try no to cheat and provide recursive solution.

// Test.assertEquals(sumR([]), 0);
// Test.assertEquals(sumR([1]), 1);
//Test.assertEquals(sumR([1,1,1]), 3);

function sumR(x) {
  return x.length ? x.reduce((a, b) => a + b) : 0;
}

//OU

function sumR(x) {
  return x.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}

//OU

function sumR(x) {
  if (x.length === 0) return 0;
  else return x[0] + sumR(x.slice(1));
}

//OU

function sumR(x) {
  return x.reduce((n, x) => n + x, 0);
}

//OU

function sumR(x) {
  return x.length == 0 ? 0 : x.shift() + sumR(x);
}

//OU

function sumR([head, ...tail]) {
  if (!head) return 0;
  else return head + sumR(tail);
}

//OU

function sumR(x) {
  return x.length && x[0] + sumR(x.slice(1));
}

//OU

function sumR(x) {
  return x.length > 0 ? x.shift() + sumR(x) : 0;
}
