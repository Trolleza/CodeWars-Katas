//7kyu - Life Path Number

// A person's Life Path Number is calculated by adding each individual number in that person's date of birth, until it is reduced to a single digit number.

// Complete the function that accepts a date of birth (as a string) in the following format: "yyyy-mm-dd". The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.

// You do not need to check that the input is correct format, you can assume that it will always be a valid date (as a string) with given format.

// Example
// For example, Albert Einstein's birthday is March 14, 1879 ("1879-03-14"). The calculation of his Life Path Number would look like this:

// year  :  1 + 8 + 7 + 9 = 25  -->  2 + 5 = 7
// month :  0 + 3 = 3
// day   :  1 + 4 = 5
// result:  7 + 3 + 5 = 15  -->  1 + 5 = 6
// Einstein's Life Path Number is therefore: 6

let lifePathNumber = (date) =>
  date <= 9
    ? Number(date)
    : lifePathNumber(
        [...date].reduce((sum, i) => `${i == "-" ? sum : +sum + +i}`, 0)
      );

//OU

function lifePathNumber(dateOfBirth) {
  let num = dateOfBirth.split("-").join("");
  while (num > 9) {
    num = ("" + num).split("").reduce((p, c) => +p + +c);
  }
  return num;
}

//OU

function sum(arr) {
  if (arr.length === 1) return arr;
  let total = arr.reduce((s, n) => s + n);
  if (total < 10) return total;
  return sum(String(total).split("").map(Number));
}
function lifePathNumber(dateOfBirth) {
  let [year, month, day] = dateOfBirth.split("-");
  year = sum(String(year).split("").map(Number));
  month = sum(String(month).split("").map(Number));
  day = sum(String(day).split("").map(Number));
  return sum([year, month, day]);
}

//OU

function soma(number) {
  let arr = (number + "").split("");
  let sum = arr.reduce((a, b) => +a + +b);
  return sum > 9 ? soma(sum) : sum;
}

function lifePathNumber(dateOfBirth) {
  let arr_birth = dateOfBirth.split("-");
  let lifenum = [];
  arr_birth.forEach((e) => lifenum.push(soma(e)));
  let result = lifenum.reduce((a, b) => a + b);
  return result > 9 ? soma(result) : result;
}

//OU

function lifePathNumber(dateOfBirth) {
  let sum = dateOfBirth
    .split("")
    .filter((item) => item !== "-")
    .reduce((a, b) => +a + +b, 0);
  return sum > 10 ? lifePathNumber(String(sum)) : sum === 10 ? 1 : sum;
}

//OU

function lifePathNumber(dateOfBirth) {
  let pathNum = dateOfBirth
    .split("")
    .map(Number)
    .filter(Number)
    .reduce((a, b) => a + b, 0);
  if (pathNum.toString().length === 1) {
    return pathNum;
  }
  return lifePathNumber(pathNum.toString());
}

//OU

function digitSum(n) {
  while (n > 9)
    n = n
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((a, b) => a + b);
  return n;
}

function lifePathNumber(dateOfBirth) {
  let [y, m, d] = dateOfBirth.split("-").map((x) => parseInt(x));
  return digitSum(digitSum(y) + digitSum(m) + digitSum(d));
}

//OU

function lifePathNumber(d) {
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i] !== "-") sum += +d[i];
    if (sum >= 10) sum = (sum % 10) + Math.floor(sum / 10);
    if (sum >= 10) sum = (sum % 10) + Math.floor(sum / 10);
  }
  return sum;
}
