// An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

// describe("Function anagramCounter", function(){
//     Test.assertEquals(typeof(anagramCounter([])), "number", "Is not returning a number");
//     Test.assertEquals(anagramCounter(['dell', 'ledl', 'abc', 'cba']) , 2, "This should be 2"); 
//     Test.assertEquals(anagramCounter(['dell', 'ledl', 'lled', 'cba']) , 3, "This should be 3"); 
//     Test.assertEquals(anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab']) , 11, "This should be 11"); 
// });

function anagramCounter (wordsArray) {
  var counter = 0;
  for (var i = 0; i < wordsArray.length; i++) {
    for (var k = i + 1; k < wordsArray.length; k++) {
      if(wordsArray[i].split('').sort().join('') === wordsArray[k].split('').sort().join('')) {
        counter ++;
      }
    }
  }
  return counter;
}

//OR

function anagramCounter(wordsArray){
  let sortedWords = wordsArray.map(word=> word.split('').sort().join(''));
  let numberOfAnagrams = 0;

  sortedWords.forEach((word, theIndex) => {
    for(let i = theIndex + 1; i < sortedWords.length; i++){
      if(word === sortedWords[i]){
        numberOfAnagrams++
      }
    }
  });
  return numberOfAnagrams
}