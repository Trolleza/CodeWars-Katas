//7kyu - Jumping Number (Special Numbers Series #4)

// Definition
// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Return the result as String .

// The difference between ‘9’ and ‘0’ is not considered as 1 .

// All single digit numbers are considered as Jumping numbers.

// Input >> Output Examples
// jumpingNumber(9) ==> return "Jumping!!"
// Explanation:
// It's single-digit number
// jumpingNumber(79) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(23) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1
// jumpingNumber(556847) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(4343456) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1
// jumpingNumber(89098) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(32) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1

function jumpingNumber(n) {
  let arr = n.toString().split("");
  for (i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) !== 1) {
      return "Not!!";
    }
  }
  return "Jumping!!";
}

//OU

const jumpingNumber = (n) =>
  [...String(n)].every((el, i, arr) =>
    i > 0 ? +el === +arr[i - 1] + 1 || +el === +arr[i - 1] - 1 : true
  )
    ? "Jumping!!"
    : "Not!!";

//OU

function jumpingNumber(n) {
  n = n.toString();
  return [...n].every((el, i, arr) =>
    i > 0 ? +el === +arr[i - 1] + 1 || +el === +arr[i - 1] - 1 : true
  )
    ? "Jumping!!"
    : "Not!!";
}

//OU

function jumpingNumber(n) {
  let numbers = n.toString().split("");
  let hasDifferenceOne = false;

  for (let i = 0; i < numbers.length; ++i) {
    if (typeof numbers[i + 1] === "undefined") break;

    let currentDiff = Number(numbers[i]) - Number(numbers[i + 1]);

    if (currentDiff === 1 || currentDiff === -1) {
      hasDifferenceOne = true;
    } else {
      hasDifferenceOne = false;
      break;
    }
  }

  return hasDifferenceOne || numbers.length === 1 ? "Jumping!!" : "Not!!";
}

//OU

function jumpingNumber(n) {
  let arr = ("" + n).split("");
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) != 1) return "Not!!";
  }
  return "Jumping!!";
}
