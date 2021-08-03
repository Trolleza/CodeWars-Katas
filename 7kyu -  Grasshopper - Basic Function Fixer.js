// 7kyu -  Grasshopper - Basic Function Fixer

// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

// Sample Tests:
// Test.assertEquals(addFive(5), 10)
// Test.assertEquals(addFive(0), 5)
// Test.assertEquals(addFive(-5), 0)

function addFive(num) {
  var total = num + 5;
  return total;
}

//OU

function addFive(num) {
  return num + 5;
}

//OU

const addFive = (n) => n + 5;

//OU

const addFive = (num) => num + 5;
