//7kyu - JavaScript Array Filter

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// Sample Tests:
// assert.deepEqual(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
//       assert.deepEqual(getEvenNumbers([1,2]), [2])
//       assert.deepEqual(getEvenNumbers([12,14,15]), [12,14])
//       assert.deepEqual(getEvenNumbers([13,15]), [])
//       assert.deepEqual(getEvenNumbers([1,3,9]), [])

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((n) => {
    return n % 2 == 0;
  });
}

//OU

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((n) => n % 2 == 0);
}

//OU

const getEvenNumbers = (numbersArray) =>
  numbersArray.filter((num) => num % 2 == 0);

//OU

function getEvenNumbers(numbersArray) {
  let evenNums = numbersArray.filter((num) => {
    return num % 2 === 0;
  });
  return evenNums;
}
