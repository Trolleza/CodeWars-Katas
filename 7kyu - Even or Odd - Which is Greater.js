// 7kyu - Even or Odd - Which is Greater?

// Description:

// /Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
  let odd = str
    .split("")
    .filter((o) => o % 2 != 0)
    .reduce((a, b) => +a + +b);
  let even = str
    .split("")
    .filter((e) => e % 2 == 0)
    .reduce((a, b) => +a + +b);
  if (even > odd) {
    return "Even is greater than Odd";
  } else if (even < odd) {
    return "Odd is greater than Even";
  } else return "Even and Odd are the same";
}

//OU

function evenOrOdd(str) {
  let countEven = 0;
  let countOdd = 0;
  let arr = str.split("");
  let arr2 = arr.map((el) => +el);
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] % 2 === 0 ? (countEven += arr2[i]) : (countOdd += arr2[i]);
  }
  return countEven > countOdd
    ? "Even is greater than Odd"
    : countEven < countOdd
    ? "Odd is greater than Even"
    : "Even and Odd are the same";
}
