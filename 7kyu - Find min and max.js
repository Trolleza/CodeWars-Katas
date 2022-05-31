// 7kyu - Find min and max

// Implement a function that returns the minimal and the maximal value of a list (in this order).

// describe("Basic tests", function(){
//   Test.assertDeepEquals(getMinMax([1]),[1,1]);
//   Test.assertDeepEquals(getMinMax([1,2]),[1,2]);
//   Test.assertDeepEquals(getMinMax([2,1]),[1,2]);
//   });

function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

//OU

function getMinMax(arr) {
  const sorted = arr.sort((a, b) => a - b);
  return [sorted[0], sorted[sorted.length - 1]];
}

//OU

function getMinMax(arr) {
  return [
    arr.reduce(function (a, b) {
      return a < b ? a : b;
    }),
    arr.reduce(function (a, b) {
      return a > b ? a : b;
    }),
  ];
}

//OU

function getMinMax(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let arr2 = [];
  arr2.push(arr[0]);
  arr2.push(arr[arr.length - 1]);
  return arr2;
}

//OU

function getMinMax(arr) {
  let [min, max] = [arr[0], arr[0]];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    else if (arr[i] < min) min = arr[i];
  }

  return [min, max];
}
