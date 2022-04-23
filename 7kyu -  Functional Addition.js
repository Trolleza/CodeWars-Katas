// 7kyu -  Functional Addition

// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

//var addOne = add(1);
// addOne(3); // 4

// var addThree = add(3);
// addThree(3); // 6

// Test.assertEquals(add(1)(3), 4, 'add one to three equals four')

function add(insideNumber) {
  return function (outsideNumber) {
    return insideNumber + outsideNumber;
  };
}

//OU

var add = (a) => (n) => n + a;

//OU

const add = (n) => {
  return (x) => {
    return n + x;
  };
};
