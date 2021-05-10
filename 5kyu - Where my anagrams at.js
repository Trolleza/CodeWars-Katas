// 5kyu - Where my anagrams at?

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
// const chai = require("chai");
// const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

// describe("Solution", function() {
//   it("should test for something", function() {
// Test.assertEquals(1 + 1, 2);
// assert.strictEqual(1 + 1, 2);
//   });
// });

let anagrams = (word, words) =>
  words.filter(
    (x) => x.split("").sort().join("") === word.split("").sort().join("")
  );

//OU

function anagrams(word, words) {
  word = word.split("").sort().join("");
  return words.filter(function (x) {
    return word == x.split("").sort().join("");
  });
}

//OU

function anagrams(word, words) {
  let result = [];
  let test = word.split("").sort().join("");

  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").sort().join("") == test) {
      result.push(words[i]);
    }
  }
  return result;
}

//OU

function anagrams(word, words) {
  return words.filter((x) => "" + [...word].sort() === "" + [...x].sort());
}
