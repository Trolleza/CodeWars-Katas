// 7kyu - I'm Everwhere!

// Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

// And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.

// Task:
// Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

// The word should not begin with the letter "I", for example Inspire.
// The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
// The first letter should not be lowercase, for example road.
// If the word does not meet the rules, we return "Invalid word".

function i(word) {
  const aei = "aeiou";
  let countAei = 0;

  for (let letter of word) {
    if (aei.includes(letter.toLowerCase())) {
      countAei++;
    }
  }

  return countAei >= word.length - countAei ||
    word[0] === "I" ||
    word[0].toLowerCase() === word[0]
    ? "Invalid word"
    : "i" + word;
}

//OU

function i(word) {
  let vowel = 0;
  let t = [...word].forEach((l) => ("AEIOUaeiou".includes(l) ? vowel++ : ""));
  return word.charAt(0) !== "I" &&
    word.length - vowel > vowel &&
    word.charAt(0) === word.charAt(0).toUpperCase()
    ? "i" + word
    : "Invalid word";
}

//OU

function i(word) {
  if (
    word === "" ||
    word[0].toLowerCase() === "i" ||
    word[0] === word[0].toLowerCase()
  )
    return "Invalid word";
  const vowels = ["a", "e", "i", "o", "u"];
  const numVow = word
    .split("")
    .filter((current) => vowels.includes(current.toLowerCase()));
  if (numVow.length >= word.length - numVow.length) return "Invalid word";
  const result = "i" + word;
  return result;
}

//OU

function i(word) {
  let vowels = 0,
    con = 0;

  if (
    word === "" ||
    word[0] === "I" ||
    "abcdefghijklmnopqrstuvwxyz".includes(word[0])
  )
    return "Invalid word";

  for (let i = 0; i < word.length; i++) {
    if ("aeiouAEIOU".includes(word[i])) vowels++;
    else if (!"aeiouAEIOU".includes(word[i])) con++;
  }

  if (con <= vowels) return "Invalid word";
  if (con > vowels) return `i${word}`;
}

//OU

function i(word) {
  let vow = ["o", "e", "a", "u", "i"];

  if (!word || word.length < 1) {
    return "Invalid word";
  }

  let vl = [...word].filter((el) => vow.includes(el.toLowerCase()));
  let cl = [...word].filter((el) => !vow.includes(el.toLowerCase()));

  if (
    vl.length >= cl.length ||
    [...word][0] === "I" ||
    [...word][0] === [...word][0].toLowerCase()
  ) {
    return "Invalid word";
  } else {
    return `i${word}`;
  }
}

//OU

function i(word) {
  let vowels = Array.from(word.toLowerCase()).filter((letter) =>
    "aeiou".includes(letter)
  ).length;
  let consonants = Array.from(word.toLowerCase()).filter((letter) =>
    "bcdfghjklmnpqrstvwxyz".includes(letter)
  ).length;

  if (
    word.slice(0, 1).toLowerCase() === "i" ||
    word.slice(0, 1).toLowerCase() === word.slice(0, 1) ||
    vowels >= consonants
  ) {
    return "Invalid word";
  } else {
    return "i" + word;
  }
}
