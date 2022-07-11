// 7kyu - Evens times last

// Description:

// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// Test.assertEquals(evenLast([2, 3, 4, 5]), 30)

function evenLast(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    sum += numbers[i];
  }
  return numbers.length ? sum * numbers.pop() : 0;
}

//OU

const evenLast = (arr) =>
  arr.filter((e, i) => i % 2 === 0).reduce((a, b) => a + b, 0) *
    arr[arr.length - 1] || 0;

//OU

const evenLast = (numbers) => {
  const even = numbers.filter((a, i) => i % 2 == 0);
  return even.reduce((acc, val) => val * numbers[numbers.length - 1] + acc, 0);
};

//OU

function evenLast(numbers) {
  let sum = 0;
  if (numbers.length) {
    for (let i = 0; i < numbers.length; i += 2) {
      sum += numbers[i];
    }
    sum *= numbers[numbers.length - 1];
  }
  return sum;
}
