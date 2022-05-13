// 7kyu - Find the Middle of the Product

// Given a string of characters, I want the function findMiddle()/find_middle() to return the middle number in the product of each digit in the string.

// Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.

// Not all strings will contain digits. In this case and the case for any non-strings, return -1.

// If the product has an even number of digits, return the middle two digits

// Example: 1563 -> 56

// NOTE: Remove leading zeros if product is even and the first digit of the two is a zero. Example 2016 -> 1

function findMiddle(str) {
  if (typeof str != "string" || !/\d/.test(str)) return -1;
  let s = Array.from(str.replace(/\D/g, ""))
    .reduce((x, y) => x * y)
    .toString();
  return +s.slice(Math.ceil(s.length / 2 - 1), Math.floor(s.length / 2 + 1));
}

//OU

function findMiddle(str) {
  if (typeof str !== "string") return -1;
  let digits = str
    .split("")
    .filter((c) => c.match(/[0-9]/))
    .map(Number);
  if (digits.length === 0) return -1;
  let product = digits.reduce((a, b) => a * b, 1).toString();

  if (product.length % 2 == 1) {
    return Number(product.slice(product.length / 2, product.length / 2 + 1));
  }

  let numbers = product.slice(product.length / 2 - 1, product.length / 2 + 1);
  return Number(numbers);
}

//OU

function findMiddle(str) {
  if (/[0-9]/gi.test(str) && typeof str === "string") {
    let num = str.match(/[0-9]/gi).reduce((a, b) => a * b, 1) + "";
    let position = num.length % 2 === 0 ? num.length / 2 - 1 : num.length / 2;
    let length = num.length % 2 === 0 ? 2 : 1;
    return +num.substring(position, position + length);
  } else {
    return -1;
  }
}

//OU

function findMiddle(str) {
  if (str == null || Array.isArray(str) || typeof str == "number") return -1;
  let regex = new RegExp("[^0-9]", "g");
  str = String(str.replace(regex, "")).split("");
  if (str.length == 0) return -1;
  str = String(str.reduce((mul, item) => (mul *= item), 1));
  if (str.length > 2)
    return +str.slice(
      Math.floor((str.length - 1) / 2),
      -Math.floor((str.length - 1) / 2)
    );
  return +str;
}

//OU

const findMiddle = (str) =>
  ((s) => (s ? +s.slice(Math.ceil(s.length / 2 - 1), s.length / 2 + 1) : -1))(
    typeof str === `string` &&
      /\d/.test(str) &&
      `${str.match(/\d/g).reduce((pre, val) => pre * val)}`
  );

//OU

function findMiddle(str) {
  if (typeof str !== "string" || !/\d/.test(str)) return -1;
  var string = str
    .replace(/\D+/g, "")
    .split("")
    .reduce((a, b) => a * b)
    .toString();
  var mid = string.length / 2;
  return Number(string.slice(Math.ceil(mid - 1), Math.floor(mid + 1)));
}
