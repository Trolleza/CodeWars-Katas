// 7kyu -  Greatest Common Divisor

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Sample Tests:
// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

function mygcd(x, y) {
  return y === 0 ? x : mygcd(y, x % y);
}

//OU

function mygcd(x, y) {
  if (!y) {
    return x;
  }
  return mygcd(y, x % y);
}

//OU

function mygcd(x, y) {
  for (let j = Math.max(x, y); j > 0; j--) {
    if (x % j === 0 && y % j === 0) {
      return j;
    }
  }
}

//OU

const mygcd = (x, y) => {
  while (x && y) {
    x > y ? (x %= y) : (y %= x);
  }
  x += y;
  return x;
};

//OU

function mygcd(x, y) {
  let [min, max] = [Math.min(x, y), Math.max(x, y)];
  let gcd = 1;
  for (let n = 2; n <= min; n++) {
    if (max % n == 0 && min % n == 0) {
      gcd *= n;
      [min, max] = [max / n, min / n];
      n--;
    }
  }
  return gcd;
}

//OU

function mygcd(x, y) {
  let bigNum = Math.max(x, y);
  let smallNum = Math.min(x, y);
  let remainder = bigNum % smallNum;
  if (!remainder) {
    return smallNum;
  } else {
    return mygcd(smallNum, remainder);
  }
}
