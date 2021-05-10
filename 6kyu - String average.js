// 6kyu - String average

// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

// Sample Tests:

// describe("Basic Tests", function(){
//   it ("Find Average", function(){
//       Test.assertEquals(averageString("zero nine five two"), "four");
//       Test.assertEquals(averageString("four six two three"), "three");
//       Test.assertEquals(averageString("one two three four five"), "three");
//       Test.assertEquals(averageString("five four"), "four");
//       Test.assertEquals(averageString("zero zero zero zero zero"), "zero");
//       Test.assertEquals(averageString("one one eight one"), "two");
//       Test.assertEquals(averageString(""), "n/a");
//   });
// });

function averageString(str) {
  num = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
  };
  arr = str.split(" "); //Separando por espaços
  result = Object.keys(num)[
    Math.floor(
      arr.reduce((acc, b) => {
        return acc + num[b]; //acc já é número, e começa no 0, como dito abaixo.
      }, 0) / arr.length
    )
  ];
  return result ? result : "n/a";
}

//OU

const averageString = (str) => {
  let numbers = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
    ],
    numArr = str.split(" "),
    isNAN = false,
    result = Math.floor(
      numArr.reduce((a, v) => {
        if (numbers.indexOf(v) < 0) isNAN = true;
        return a + numbers.indexOf(v);
      }, 0) / numArr.length
    );
  return isNAN ? "n/a" : numbers[result];
};

//OU

function averageString(str) {
  if (str.length === 0) {
    return "n/a";
  }

  const numArr = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
  ];
  const strArr = str.split(" ");
  let sum = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (numArr.indexOf(strArr[i]) === -1) {
      return "n/a";
    }
    sum += numArr.indexOf(strArr[i]);
  }

  return numArr[Math.floor(sum / strArr.length)];
}
