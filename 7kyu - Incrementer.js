// 7kyu - Incrementer

// Given an input of an array of digits num , return the array with each digit incremented by its position in the array. For example, the first digit will be incremented by 1, the second digit by 2 etc. Make sure to start counting your positions from 1 and not 0.

// incrementer({1,2,3}) => {2,4,6}
// Your result can only contain single digit numbers, so if adding a digit with it's position gives you a multiple-digit number, only the last digit of the number should be returned

// incrementer({4,6,9,1,3}) => {5,8,2,5,8}

//   - 9 + 3 (position of 9 in array) = 12
//   - Only its last digit 2 should be returned
// Lastly, return {} if your array is empty! Arrays will only contain numbers so don't worry about checking that.

function incrementer(num) {
  return num.map((val, ind) => (val + ind + 1) % 10);
}

//OU

let incrementer = (a) => a.map((a, i) => +(a + i + 1 + "").slice(-1));

//OU

function incrementer(arr) {
  for (let i = 1; i < arr.length + 1; i++) {
    arr[i - 1] = arr[i - 1] + i;
    if (arr[i - 1] > 9) {
      arr[i - 1] = arr[i - 1] % 10;
    }
  }
  return arr;
}

//OU

function incrementer(num) {
  return num.map((digit, index) => {
    let string = (digit + index + 1).toString();
    return +string[string.length - 1];
  });
}
