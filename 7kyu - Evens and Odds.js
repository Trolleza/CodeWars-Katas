// 7kyu - Evens and Odds

// Description:

// This kata is about converting numbers to their binary or hexadecimal representation:

//     If a number is even, convert it to binary.
//     If a number is odd, convert it to hex.

// Numbers will be positive. The hexadecimal string should be lowercased.

function evensAndOdds(num) {
  return num.toString(num % 2 ? 16 : 2);
}

//OU

function evensAndOdds(num) {
  const isEven = num % 2 === 0;
  const toBinary = () => num.toString(2);
  const toHexadecimal = () => num.toString(16);

  return isEven ? toBinary() : toHexadecimal();
}

//OU

function evensAndOdds(num) {
  return num % 2 === 0 ? num.toString(2) : num.toString(16);
}
