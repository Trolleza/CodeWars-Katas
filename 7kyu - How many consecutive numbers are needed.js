// 7kyu -  How many consecutive numbers are needed?

// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

// Sample Tests:
// Test.assertEquals(consecutive([4,8,6]),2);
// Test.assertEquals(consecutive([1,2,3,4]),0);
// Test.assertEquals(consecutive([]),0);
// Test.assertEquals(consecutive([1]),0);

let consecutive = (arr) =>
  arr.length ? Math.max(...arr) - Math.min(...arr) - arr.length + 1 : 0;

//OU

function consecutive(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  return arr[arr.length - 1] - arr[0] - (arr.length - 1) || 0;
}

//OU

function consecutive(arr) {
  let result = 0;

  arr.sort((a, b) => a - b);

  for (var i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];
    if (diff > 1) {
      result += diff - 1; //ou --diff
    }
  }
  return result;
}

//OU

function consecutive(arr) {
  var sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  let count = 0;
  for (let i = 0; i < sorted.length - 1; i++) {
    let diff = sorted[i + 1] - sorted[i];
    if (diff > 1) {
      count += diff - 1;
    }
  }
  return count;
}
