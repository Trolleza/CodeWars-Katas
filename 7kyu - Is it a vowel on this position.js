//7kyu - Is it a vowel on this position?

// Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

// A few cases:

// {
// checkVowel('cat', 1)  ->   true // 'a' is a vowel
// checkVowel('cat', 0)  ->   false // 'c' is not a vowel
// checkVowel('cat', 4)  ->   false // this position doesn't exist
// }
// P.S. If n < 0, return false

function checkVowel(string, position) {
  let vowel = "aeiouAEIOU";
  return vowel.includes(string[position]);
}

//OU

const checkVowel = (string, position) =>
  /[aeiou]/i.test(string[position] || "");

//OU

function checkVowel(string, position) {
  return (
    position >= 0 &&
    position < string.length &&
    /[aeiou]/gi.test(string[position])
  );
}

//OU

const checkVowel = (s, p) => "aeiouAEIOU".includes(s[p]);

//OU

function checkVowel(string, position) {
  const vowels = ["a", "e", "i", "o", "u"];
  string = string.toLowerCase();
  if (vowels.includes(string[position])) {
    return true;
  } else {
    return false;
  }
}

//OU

function checkVowel(string, position) {
  let lowerString = string.toLowerCase();
  if (
    lowerString[position] === "a" ||
    lowerString[position] === "e" ||
    lowerString[position] === "i" ||
    lowerString[position] === "o" ||
    lowerString[position] === "u"
  ) {
    return true;
  }
  return false;
}

//OU

function checkVowel(string, position) {
  for (let i = 0; i < string.length; i++) {
    if ("aeiouAEIOU".indexOf(string[position]) !== -1) return true;
  }
  return false;
}
