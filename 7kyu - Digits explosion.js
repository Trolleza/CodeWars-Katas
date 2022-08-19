// 7kyu - Digits explosion

// Description:

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples

// explode("312")

// should return :

// "333122"

// explode("102269")

// should return :

// "12222666666999999999"

function explode(s) {
  return s
    .split("")
    .map((a) => a.repeat(+a))
    .join("");
}

//OU

explode = (s) => [...s].map((n) => n.repeat(n)).join``;

//OU

function explode(s) {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    for (let num = s[i]; num > 0; num--) {
      newStr += s[i];
    }
  }
  return newStr;
}

//OU

const explode = (s) => {
  let repNums = "";

  for (let i = 0; i < s.length; i++) {
    repNums += s[i].repeat(+s[i]);
  }
  return repNums;
};

//OU

function explode(s) {
  return s
    .split("")
    .map((i) => "".padEnd(i, i))
    .join("");
}

//OU

const explode = (s) => s.replace(/\d/g, (x) => x.repeat(+x));
