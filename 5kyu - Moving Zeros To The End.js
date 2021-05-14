// 5kyu - Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Sample Tests:
// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(
//   JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
//   JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
// );
// });
// });

let moveZeros = function (arr) {
  let otherList = arr.filter((num) => {
    return num !== 0;
  });
  let zeroList = arr.filter((num) => {
    return num === 0;
  });
  return otherList.concat(zeroList);
};

//OU

let moveZeros = function (arr) {
  let zero = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      zero.push(0);
      i--;
    }
  }
  return arr.concat(zero);
};

//OU

let moveZeros = function (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    //tem que ser -- pois o splice vai diminuindo o tamanho da array, então ela não vai até o final!
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
};

//OU

let moveZeros = function (arr) {
  return arr
    .filter((x) => {
      return x !== 0;
    })
    .concat(
      arr.filter((x) => {
        return x === 0;
      })
    );
};

//OU

let moveZeros = function (arr) {
  let result = arr.filter((x) => x !== 0);
  let count = arr.length - result.length;
  return result.concat(Array(count).fill(0));
};

//OU

let moveZeros = function (arr) {
  return [...arr.filter((x) => x !== 0), ...arr.filter((x) => x === 0)];
};
