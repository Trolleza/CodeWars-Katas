// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//TESTS:
// describe('Fixed tests', _ => {
//   it('Edge tests', _ => {
//     Test.assertEquals(oddOrEven([0]), 'even')
//     Test.assertEquals(oddOrEven([1]), 'odd')
//     Test.assertEquals(oddOrEven([]), 'even')
//   });
  
//   it('Even tests', _ => {
//     Test.assertEquals(oddOrEven([0, 1, 5]), 'even')
//     Test.assertEquals(oddOrEven([0, 1, 3]), 'even')
//     Test.assertEquals(oddOrEven([1023, 1, 2]), 'even')
//   });
  
//   it('Negative Even tests', _ => {
//     Test.assertEquals(oddOrEven([0, -1, -5]), 'even')
//     Test.assertEquals(oddOrEven([0, -1, -3]), 'even')
//     Test.assertEquals(oddOrEven([-1023, 1, -2]), 'even')
//   });
  
//   it('Odd tests', _ => {
//     Test.assertEquals(oddOrEven([0, 1, 2]), 'odd')
//     Test.assertEquals(oddOrEven([0, 1, 4]), 'odd')
//     Test.assertEquals(oddOrEven([1023, 1, 3]), 'odd')
//   });
  
//   it('Negative Odd tests', _ => {
//     Test.assertEquals(oddOrEven([0, -1, 2]), 'odd')
//     Test.assertEquals(oddOrEven([0, 1, -4]), 'odd')
//     Test.assertEquals(oddOrEven([-1023, -1, 3]), 'odd')
//   });
// });

function oddOrEven(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  if (result % 2 == 0) {
    return "even";
  } else{
    return "odd";
  }
}