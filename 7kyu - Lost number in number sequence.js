// 7kyu - Lost number in number sequence

// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// Sample Tests:
// describe("Tests", () => {
//   it("test", () => {
// // These are some CW specific test methods available:
// //    Test.expect(boolean, [optional] message)
// //    Test.assertEquals(actual, expected, [optional] message)
// //    Test.assertSimilar(actual, expected, [optional] message)
// //    Test.assertNotEquals(actual, expected, [optional] message)

// Test.assertEquals(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
//   });
// });

function findDeletedNumber(arr, mixArr) {
  return (
    arr.find((element) => {
      return !mixArr.includes(element);
    }) || 0
  );
}

//OU

const findDeletedNumber = (arr, mixArr) =>
  arr.filter((el) => !mixArr.includes(el))[0] || 0;

//OU

const findDeletedNumber = (arr, mixArr) =>
  arr.find((val) => !mixArr.includes(val)) || 0;

//OU

function findDeletedNumber(arr, mixArr) {
  let arrSum = arr.reduce((a, b) => a + b, 0);
  let mixArrSum = mixArr.reduce((a, b) => a + b, 0);
  return arrSum - mixArrSum;
}

//OU

function findDeletedNumber(arr, mixArr) {
  return (
    arr.reduce((soma, index) => soma + index, 0) -
    mixArr.reduce((soma, index) => soma + index, 0)
  );
}

//OU

function findDeletedNumber(arr, mixArr) {
  sortArr = mixArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) {
      return arr[i];
    }
  }
  return 0;
}

//OU

function findDeletedNumber(arr, mixArr) {
  for (let i = 0; i < arr.length; i++) {
    if (mixArr.indexOf(arr[i]) < 0) {
      return arr[i];
    }
  }
  return 0;
}

//OU

function findDeletedNumber(arr, mixArr) {
  if (arr.length === mixArr.length) return 0;
  for (let i in arr) {
    if (mixArr.indexOf(arr[i]) === -1) {
      return arr[i];
    }
  }
}
