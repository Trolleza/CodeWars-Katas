//7kyu - Inspiring Strings

// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

function longestWord(stringOfWords) {
  stringOfWords = stringOfWords.split(" ");
  let str = "";
  for (let i = 0; i < stringOfWords.length; i++) {
    if (stringOfWords[i].length >= str.length) {
      str = stringOfWords[i];
    }
  }
  return str;
}

//OU

let longestWord = (s) =>
  s.split(" ").reduceRight((a, b) => (b.length > a.length ? b : a));

//OU

function longestWord(str) {
  return str
    .split(" ")
    .sort((b, a) => b.length - a.length)
    .pop();
}

//OU

function longestWord(str) {
  return str
    .split(" ")
    .reduce((acc, i) => (acc.length > i.length ? acc : i), "");
}

//OU

function longestWord(stringOfWords) {
  return stringOfWords.split(" ").reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });
}
