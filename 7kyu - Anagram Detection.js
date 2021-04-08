// An anagram is the result of rearranging the letters of a word to produce a new word.
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

// Test.assertEquals(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
// Test.assertEquals(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
// Test.assertEquals(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')

// Test.assertEquals(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
// Test.assertEquals(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
// Test.assertEquals(isAnagram("apple", "pale"), false, 'Same letters, but different count')

let isAnagram = function(test, original) {
  let order = str => str.toLowerCase().split("").sort().join("");
  if(order(test) === order(original)) {
    return true;
  } else {
    return false;
  }
};