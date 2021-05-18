// 4kyu - Remove Zeros

// Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

// For example, the following array

// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

// is transformed into

// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

// Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

// You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.

// Sample Tests:

// describe("Tests", () => {
//   it("test", () => {
// let input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14],
//     solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];

// Test.assertEquals(JSON.stringify(removeZeros(input)), JSON.stringify(solution));
//   });
// });

function removeZeros(array) {
  let zeros = [];
  let normal = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === "0" || array[i] === 0) zeros[zeros.length] = array[i];
    else normal[normal.length] = array[i];
  }
  for (let i = 0; i <= zeros.length - 1; i++) {
    normal[normal.length] = zeros[i];
  }

  return normal;
}

//OU

function removeZeros(array) {

  let count = 0;
  for(let n = 0; n < array.length; n++)
    if(array[n] === 0 || array[n] === "0")
      count++;
  
  for(let i = 0; i < array.length - count; i++){
    if(array[i] === 0 || array[i] === "0"){
      const currentI = i
      for(let j = i; j < array.length - 1; j++){
        let a = array[j];
        array[j] = array[j + 1]
        array[j + 1] = a
      }
      i = currentI - 1
    }
  }
  return array
}

//OU

function removeZeros(array) {
  let zeros = 0;
  for(let i = 0; i < array.length - zeros; i++)
    if(array[i] === 0 || array[i] === '0') {
      let tmp = array[i];
      for(var j = i + 1; j < array.length; j++)
        array[j - 1] = array[j];
      array[j - 1] = tmp;
      i--;
      zeros++;
    }
  return array;
}