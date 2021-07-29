// 7kyu -  Haiku Wizard

// Doesn't everyone love a haiku?

// If you don't know what that is, let me make your day :D

// A haiku is a traditional form of Japanese poetry, they normally have 3 lines with 5, 7 and 5 syllables respectively. For example:

// codewars training day
// regular expressions mean
// many cups of tea
// Feeling a little concerned that I'm about to ask you to write poetry? Fear not! You only have to translate the haiku from numbers to words, no need to start looking frantically for creative inspiration. Let me explain:

// I'm giving you:

// a function, haikuWizard(), which you have to complete.
// a big, predefined array with lots of words organised in subarrays! As you can see, each subarray has 10 members and they are all words with the same number of syllables. So words[0] contains words of 1 syllable, words[1] contains words of 2 syllables and so on.
// var words = [
// ["like", "a", "tweet", "what", "for", "world", "whale", "one", "last", "sun"],
// ["ocean", "beauty", "tweet", "monster", "yellow", "return", "despair", "flower", "return", "contrast"],
// ["romantic", "curious", "banana", "jealousy", "tactlessly", "remorseful", "follower", "elephant", "however", "instagram"],
// ["salmonella", "consequently", "irregular", "intelligence", "vegetable", "ordinary", "alternative", "watermelon", "controversial", "marijuana"],
// ["lackadaisical", "serendipity", "colonoscopy", "dramatically", "parsimonius", "imagination", "electricity", "diabolical", "deforestation", "abomination"],
// ["extraterrestrial", "onomatopoeia", "responsibility", "revolutionary", "generalisation", "enthusiastically", "biodiversity", "veterinarian", "characteristically", "indefatigable"],
// ["oversimplification", "individuality", "decriminalisation", "compartmentalisation", "anaesthesiologist", "industrialisation", "buckminsterfullerene", "irresponsibility", "autobiographical", "utilitarianism"]]
// Back to our function: haikuWizard() takes an array as its input. This array has 3 subarrays - each subarray represents a line of the haiku. For example:

// [[52], [17, 23, 39, 18], [33, 22]]

// For each number, the first digit tells you the number of syllables of the word, the second digit tells you which member of the relevant subarray it is.

// For example:

// 52: This means that the first line is made up of one word with 5 syllables, at index 2 in words[4].

// [17, 23, 39, 18]: This means that the second line is made up of 4 words. The first has 1 syllable and is at index 7 in words[0]. The second has 2 syllables and is at index3 in words[1]. And so on...

// All you have to do is complete the function haikuWizard() so that it translates the given array back into the beautiful haiku it came from :)

// You should return a string, which on using console.log should display in the appropriate haiku format:

// console.log(str);

// there's a trumpet man
// waltzing around the canals
// he's getting dizzy
// The string itself will not have this format.

// To summarise in case you don't feel like reading all that again:

// haikuWizard() should turn arr into a haiku using the array words.
// arr has 3 subarrays, each represents a line of the haiku.
// the first digit of each number in arr represents the number of syllables of the word, the second digit is its index in the relevant subarray of words.
// the return string should display a beautiful haiku with the correct structure.
// Enjoy!

// var words = [
//   ["like", "a", "tweet", "what", "for", "world", "whale", "one", "last", "sun"],
//   ["ocean", "beauty", "tweet", "monster", "yellow", "return", "despair", "flower", "return", "contrast"],
//   ["romantic", "curious", "banana", "jealousy", "tactlessly", "remorseful", "follower", "elephant", "however", "instagram"],
//   ["salmonella", "consequently", "irregular", "intelligence", "vegetable", "ordinary", "alternative", "watermelon", "controversial", "marijuana"],
//   ["lackadaisical", "serendipity", "colonoscopy", "dramatically", "parsimonius", "imagination", "electricity", "diabolical", "deforestation", "abomination"],
//   ["extraterrestrial", "onomatopoeia", "responsibility", "revolutionary", "generalisation", "enthusiastically", "biodiversity", "veterinarian", "characteristically", "indefatigable"],
//   ["oversimplification", "individuality", "decriminalisation", "compartmentalisation", "anaesthesiologist", "industrialisation", "buckminsterfullerene", "irresponsibility", "autobiographical", "utilitarianism"]]

function haikuWizard(arr) {
  return arr
    .map(function (line) {
      return line
        .map(function (word) {
          word = word.toString();
          return words[word[0] - 1][word[1]];
        })
        .join(" ");
    })
    .join("\n");
}

//OU

let haikuWizard = (function (arr) {
  return function (arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      temp.push(
        arr[i]
          .map((a) => {
            let idx = a.toString().split("");
            return words[+idx[0] - 1][+idx[1]];
          })
          .join(" ")
      );
    }
    return temp.join("\n");
  };
})();

//OU

function haikuWizard(arr) {
  let out = [];
  for (let a of arr) {
    let line = [];
    for (let w of a) {
      line.push(words[+String(w)[0] - 1][String(w)[1]]);
    }
    out.push(line.join(" "));
  }
  return out.join("\n");
}

//OU

function haikuWizard(arr) {
  let row = 0,
    col = 0;
  let str = "",
    line = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      [row, col] = arr[i][j].toString().split("").map(Number);
      line += " " + words[row - 1][col];
    }
    str += line.trim() + "\n";
    line = "";
  }
  return str.trim();
}
