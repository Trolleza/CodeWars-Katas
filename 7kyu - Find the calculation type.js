// 7kyu - Find the calculation type

// You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).

// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

// The possible return strings are: "addition", "subtraction", "multiplication", "division".
// Example:

// calcType(1, 2, 3) -->   1 ? 2 = 3   --> "addition"

// Notes

//     In case of division you should expect that the result of the operation is obtained by using / operator on the input values - no manual data type conversion or rounding should be performed.
//     Cases with just one possible answers are generated.
//     Only valid arguments will be passed to the function.

// Only valid arguments will be passed to the function!

// Sample Tests:
// describe("Sample tests", function(){
//   it("addition", function(){
//     Test.assertEquals(calcType(1,2,3),'addition');
//   });
//   it("multiplication", function(){
//     Test.assertEquals(calcType(10,4,40),'multiplication');
//   });
//   it("subtraction", function(){
//     Test.assertEquals(calcType(10,5,5),'subtraction');
//   });
//   it("division", function(){
//     Test.assertEquals(calcType(9,5,1.8),'division');
//   });
// });

function calcType(a, b, res) {
  if (a + b == res) return "addition";
  else if (a - b == res) return "subtraction";
  else if (a / b == res) return "division";
  else return "multiplication";
}

//OU

const calcType = (a, b, res) =>
  a + b === res
    ? "addition"
    : a - b === res
    ? "subtraction"
    : a * b === res
    ? "multiplication"
    : a / b === res
    ? "division"
    : null;

//OU

function calcType(a, b, res) {
  switch (res) {
    case a + b:
      return "addition";
      break;
    case a - b:
      return "subtraction";
      break;
    case a / b:
      return "division";
      break;
    case a * b:
      return "multiplication";
  }
}

//OU

const calcType = (a, b, res) => {
  const types = {
    addition: a + b === res,
    subtraction: a - b === res,
    multiplication: a * b === res,
    division: a / b === res,
  };
  for (const key in types) if (types[key]) return key;
};

//OU

function calcType(a, b, res) {
  return {
    [a + b]: "addition",
    [a - b]: "subtraction",
    [a * b]: "multiplication",
    [a / b]: "division",
  }[res];
}

//OU

function calcType(a, b, res) {
  return a + b == res
    ? "addition"
    : a * b == res
    ? "multiplication"
    : a - b == res
    ? "subtraction"
    : "division";
}
