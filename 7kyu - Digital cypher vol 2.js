// 7kyu - Digital cypher vol 2

// Description:

// Introduction

// Digital Cypher assigns to each letter of the alphabet unique number. For example:

//  a  b  c  d  e  f  g  h  i  j  k  l  m
//  1  2  3  4  5  6  7  8  9 10 11 12 13
//  n  o  p  q  r  s  t  u  v  w  x  y  z
// 14 15 16 17 18 19 20 21 22 23 24 25 26

// Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

//  s  c  o  u  t
// 19  3 15 21 20

// Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

//    s  c  o  u  t
//   19  3 15 21 20
//  + 1  9  3  9  1
//  ---------------
//   20 12 18 30 21

//    m  a  s  t  e  r  p  i  e  c  e
//   13  1 19 20  5 18 16  9  5  3  5
// +  1  9  3  9  1  9  3  9  1  9  3
//   --------------------------------
//   14 10 22 29  6 27 19 18  6  12 8

// Task

// Write a function that accepts an array of integers code and a key number. As the result, it should return string containg a decoded message from the code.
// Input / Output

// The code is a array of positive integers.
// The key input is a nonnegative integer.
// Example

// decode([ 20, 12, 18, 30, 21],1939);  ==> "scout"
// decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8],1939);  ==>  "masterpiece"

let decode = (c, n) =>
  c
    .map((a, i) =>
      String.fromCharCode(96 + a - parseInt(String(n)[i % String(n).length]))
    )
    .join("");

//OU

function decode(code, n) {
  let a = " abcdefghijklmnopqrstuvwxyz";
  s = n + "";
  p = s.length;
  return code.reduce((x, y, i) => x + a[y - s[i % p]], "");
}

//OU

function decode(code, n) {
  var nCount = 0;
  var result = [];
  n = n.toString();
  for (i = 0; i < code.length; i++) {
    result.push(String.fromCharCode(code[i] + 96 - Number(n[nCount])));
    nCount++;
    if (nCount === n.length) nCount = 0;
  }
  return result.join("");
}

//OU

function decode(code, n) {
  n = n + "";
  console.log(typeof n);
  return code
    .map((number, index) => number - 1 - n[index % n.length])
    .map((number) => letters[number])
    .join("");
}

var letters = "abcdefghijklmnopqrstuvwxyz";

//OU

const letters = "abcdefghijklmnopqrstuvwxyz";

function decode(code, n) {
  n = String(n);
  return code.reduce((result, number, i) => {
    number -= Number(n[i % n.length]);
    return result + letters[number - 1];
  }, "");
}

//OU

const decode = (code, n) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz",
    numArr = n
      .toString()
      .split("")
      .map((e) => +e);
  let result = [];

  for (let i = 0, j = 0; i < code.length; i++, j++) {
    if (j > numArr.length - 1) j = 0;
    result.push(alphabet[code[i] - numArr[j] - 1]);
  }

  return result.join("");
};

//OU

function decode(code, n) {
  const alphabet = `abcdefghijklmnopqrstuvwxyz`;
  let nArr = `${n}`.split("");
  const map = code.map((n, idx) =>
    alphabet.charAt(n - nArr[idx % nArr.length] - 1)
  );
  return map.join("");
}
