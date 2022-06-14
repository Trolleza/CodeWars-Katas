// 7kyu - Filter Long Words

// Description:

// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

const filterLongWords = (sentence, n) =>
  sentence.split(` `).filter((val) => val.length > n);

//OU

function filterLongWords(sentence, n) {
  let longer = [];
  let separation = sentence.split(" ");
  for (let i = 0; i < separation.length; i++) {
    if (separation[i].length > n) longer.push(separation[i]);
  }
  return longer;
}

//OU

function filterLongWords(sentence, n) {
  let words = sentence.split(" ");
  let longWords = [];

  for (let word of words) {
    if (word.length > n) {
      longWords.push(word);
    }
  }
  return longWords;
}

//OU

function filterLongWords(sentence, n) {
  return sentence
    .split(/\s+/)
    .reduce((arr, curr) => (curr.length > n ? arr.concat(curr) : arr), []);
}

//OU

function filterLongWords(sentence, n) {
  return sentence.match(new RegExp(`[^ ]{${n + 1},}`, "gi")) || [];
}

//OU

function filterLongWords(sentence, n) {
  var b = sentence.split(" ");
  const aa = b.filter((x) => x.length > n);
  return aa;
}
