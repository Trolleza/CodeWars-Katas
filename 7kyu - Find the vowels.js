// 7kyu - Find the vowels

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

// NOTES

//     Vowels in this context refers to: a e i o u y (including upper case)
//     This is indexed from [1..n] (not zero indexed!)

//MINHA RESPOSTA:
function vowelIndices(word) {
  let arr = [];
  let lower = word.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    if (
      lower[i] == "a" ||
      lower[i] == "e" ||
      lower[i] == "i" ||
      lower[i] == "o" ||
      lower[i] == "u" ||
      lower[i] == "y"
    ) {
      arr.push(i + 1);
    }
  }
  return arr;
}

//OU

function vowelIndices(word) {
  let res = [];

  for (let i = 0; i < word.length; i++) {
    if ("aiuoeyAIUOEY".includes(word[i])) {
      res.push(i + 1);
    }
  }

  return res;
}

//OU

function vowelIndices(word) {
  return word
    .split("")
    .map((a, idx) => (/[aeiouy]/gi.test(a) ? idx + 1 : ""))
    .filter((b) => b);
}

//OU

function vowelIndices(word) {
  var arr = [];
  for (var i = 0; i < word.length; i++) {
    if (/[aeioyu]/i.test(word[i])) {
      arr.push(i + 1);
    }
  }
  return arr;
}

//OU

function vowelIndices(word) {
  vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
  result = [];
  for (var i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) != -1) {
      result.push(i + 1);
    }
  }
  return result;
}

//OU

const vowelIndices = (word) =>
  [...word]
    .map((el, i) => (el.match(/[aeiouy]/gi) ? i + 1 : ""))
    .filter((el) => el);

//OU

function vowelIndices(word) {
  word = word.toLowerCase();
  var ans = [];
  var vowels = ["a", "e", "i", "o", "u", "y"];
  for (i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) >= 0) {
      ans.push(i + 1);
    }
  }
  return ans;
}

//OU

function vowelIndices(word) {
  const lower = word.toLowerCase();
  const arr = [...lower];
  const arrIndex = [];
  arr.forEach((letter, index) => {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u" ||
      letter === "y"
    ) {
      arrIndex.push(index + 1);
    }
  });
  return arrIndex;
}
