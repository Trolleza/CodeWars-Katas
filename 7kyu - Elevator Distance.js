// 7kyu - Elevator Distance

// Description:

// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

// Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// // simple examples
// elevatorDistance([5,2,8]) = 9
// elevatorDistance([1,2,3]) = 2
// elevatorDistance([7,1,7,1]) = 18

// if two consecutive floors are the same,
//distance travelled between them is 0
// elevatorDistance([3,3]) = 0

// Good luck!

function elevatorDistance(array) {
  let total = 0;
  for (let i = 0; i < array.length - 1; i++) {
    total += Math.abs(array[i] - array[i + 1]);
  }
  return total;
}

//OU

function elevatorDistance(array) {
  return array.slice(1).reduce((s, n, i) => s + Math.abs(n - array[i]), 0);
}

//OU

const elevatorDistance = ($) =>
  $.slice(1)
    .map((el, i) => Math.abs($[i] - el))
    .reduce((a, b) => a + b, 0);
