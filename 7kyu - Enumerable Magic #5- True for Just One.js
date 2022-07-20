// 7kyu - Enumerable Magic #5- True for Just One?

// Description:

// Task

// Create a function called one that accepts two params:

//     a sequence
//     a function

// and returns true only if the function in the params returns true for exactly one (1) item in the sequence.
// Example

// one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
// one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
// one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false

// Test.assertEquals(one([1,2,3,4,5], function(item){ return item<2}), true)
// Test.assertEquals(one([1,2,3,4,5], function(item){ return item%2 }), false, "more than 1 item are odd")
// Test.assertEquals(one([1,2,3,4,5], function(item){ return item>5 }), false, "none item is greater than 5")

function one(arr, fun) {
  return arr.filter(fun).length == 1;
}

//OU

const one = (arr, fun) => (arr.filter(fun).length == 1 ? true : false);

//OU

function one(arr, fun) {
  let qtyTrue = 0,
    i = 0;
  // if qtyTrue is >= two, for loop stop and don't run anymore
  while (qtyTrue < 2 && i < arr.length) {
    if (fun(arr[i])) {
      qtyTrue += 1;
    }
    i += 1;
  }
  return qtyTrue === 1;
}

//OU

function one(arr, fun) {
  let qtyTrue = 0;

  for (const item of arr) {
    if (fun(item)) {
      qtyTrue += 1;
    }
  }
  return qtyTrue === 1;
}

//OU

function one(arr, fun) {
  let res = [];
  for (let i in arr) {
    if (fun(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res.length == 1;
}

//OU

function one(arr, fun) {
  let res = [];
  let i = 0;
  while (i < arr.length) {
    if (fun(arr[i]) == true) {
      res.push(arr[i]);
    }
    i++;
  }
  return res.length == 1;
}
