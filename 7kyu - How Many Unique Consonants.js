// 7kyu - How Many Unique Consonants?

// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

// Consonants are letters used in English other than "a", "e", "i", "o", "u". We will count "y" as a consonant.

// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

// Examples
// "add" ==> 1
// "Dad" ==> 1
// "aeiou" ==> 0
// "sillystring" ==> 7
// "abcdefghijklmnopqrstuvwxyz" ==> 21
// "Count my unique consonants!!" ==> 7

function countConsonants(str) {
  var consonants = [
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var nv = str.toUpperCase().split("");
  var count = 0;
  for (let i = 0; i < nv.length; i++) {
    for (let j = 0; j < consonants.length; j++) {
      if (nv[i] === consonants[j]) {
        count++;
        delete consonants[j];
      }
    }
  }
  return count;
}

//OU

function countConsonants(str) {
  str = str.toLowerCase();
  var newStr = [];
  var vowels = ["a", "e", "i", "o", "u"];
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      if (vowels.indexOf(str[i]) == -1 && newStr.indexOf(str[i]) == -1) {
        newStr.push(str[i]);
        count++;
      }
    }
  }
  return count;
}

//OU

let countConsonants = (str) =>
  new Set(str.toLowerCase().replace(/[aeiou]|[^a-z]/g, "")).size;

//OU

function countConsonants(str) {
  return str
    .toLowerCase()
    .split("")
    .filter((i) => /(?![aeiou])[b-z]/i.test(i))
    .filter((el, ind, self) => ind === self.indexOf(el)).length;
}

//OU

function countConsonants(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const justConsonants = [...str.toLowerCase()].filter(
    (letter) => letter.match(/[a-z]/i) && !vowels.includes(letter)
  );
  return new Set(justConsonants).size;
}

//OU

function countConsonants(str) {
  var set = new Set(str.toLowerCase());
  count = 0;
  alphabet = "bcdfghjklmnpqrstvwxyz".split("");
  set.forEach((item) => {
    alphabet.includes(item) ? (count += 1) : count;
  });
  return count;
}

//OU

function countConsonants(str) {
  let consonants = "qwrtypsdfghjklzxcvbnm";
  let result = new Set(
    [...str.toLowerCase()].filter((x) => consonants.includes(x))
  );
  return result.size;
}

//OU

function countConsonants(str) {
  const matched =
    [...new Set(str.toUpperCase())]
      .join("")
      .match(/[BCDFGHJKLMNPQRSTVWXYZ]/g) || [];
  return matched.length;
}

//OU

function countConsonants(str) {
  return [...new Set(str.toLowerCase())].filter((a) =>
    "bcdfghjklmnpqrstvwxyz".includes(a)
  ).length;
}

//OU

function countConsonants(str) {
  let vowelArray = ["a", "e", "i", "o", "u"];
  let strArray = str.toLowerCase().split("");
  let letters = strArray.filter((x) => !vowelArray.includes(x));
  const uniqueSet = new Set(letters.filter((x) => x.charCodeAt(0) > 97));
  return uniqueSet.size;
}

//OU

function countConsonants(str) {
  let str = str.toLowerCase();
  const cons = "qwrtyplkjhgfdszxcvbnm";
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (cons.indexOf(str[i]) != -1) {
      obj[str[i]] = true;
    }
  }
  return Object.keys(obj).length;
}
