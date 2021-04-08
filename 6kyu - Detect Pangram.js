// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// var string = "The quick brown fox jumps over the lazy dog."
// Test.assertEquals(isPangram(string), true)
// var string = "This is not a pangram."
// Test.assertEquals(isPangram(string), false)

function isPangram(string){
  let uniqueLetters = string.toLowerCase()
    .split('')
    .filter(letter => letter.match(/[a-z]/))
    .filter((characters, i, arr) => arr.indexOf(characters) === i).length;
  if (uniqueLetters === 26) {
    return true
  } else {
    return false
  }
}