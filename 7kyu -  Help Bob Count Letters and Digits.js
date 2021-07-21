// 7kyu -  Help Bob Count Letters and Digits

// Bob is a lazy man.

// He needs you to create a method that can determine how many letters and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

// Sample Tests:
// assert.equal(countLettersAndDigits("hel2!lo"), 6);
//     assert.equal(countLettersAndDigits("n!!_ice!!123"), 7);
//     assert.equal(countLettersAndDigits("1"), 1);
//     assert.equal(countLettersAndDigits("?"), 0);
//     assert.equal(countLettersAndDigits("12345f%%%t5t&/6"), 10);
//     assert.equal(countLettersAndDigits("aBcDeFg090"), 10);
//     assert.equal(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10);

function countLettersAndDigits(input) {
  let str = input.toLowerCase();
  let list = "0123456789abcdefghijklmnopqrstuvwxyz";
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (list.includes(str[i])) {
      counter++;
    }
  }
  return counter;
}

//OU

function countLettersAndDigits(input) {
  let list = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let arr = [];
  for (let el of input) {
    if (list.includes(el)) arr.push(el);
  }
  return arr.length;
}

//OU

function countLettersAndDigits(input) {
  return input
    .split("")
    .filter(
      (c) =>
        (c >= "0" && c <= "9") ||
        (c >= "a" && c <= "z") ||
        (c >= "A" && c <= "Z")
    ).length;
}

//OU

function countLettersAndDigits(input) {
  return [...input.toUpperCase()].filter(
    (el) =>
      Number(el) ||
      el === "0" ||
      (el.charCodeAt(0) > 64 && el.charCodeAt(0) < 91)
  ).length;
}

//OU

function countLettersAndDigits(input) {
  let o = input.match(/[a-z\d]/gi);
  return o !== null ? o.length : 0;
}

//OU

function countLettersAndDigits(input) {
  let count = 0;
  for (let item of input) {
    if (item.match("^[a-zA-Z0-9]*$")) count++;
  }
  return count;
}

//OU

function countLettersAndDigits(input) {
  let regExp = /[A-Za-z0-9]+/g;
  let str = input.match(regExp);
  return str ? str.join("").length : 0;
}

//OU

function countLettersAndDigits(input) {
  return input
    .toUpperCase()
    .split("")
    .reduce((counter, char) => {
      const ascii = char.charCodeAt(0);
      if ((ascii >= 48 && ascii <= 57) || (ascii >= 65 && ascii <= 90)) {
        counter++;
      }
      return counter;
    }, 0);
}
