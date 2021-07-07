// 7kyu - Hungarian Vowel Harmony (easy)

// Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.

// Task:
// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

// Vowel Harmony Rules (simplified)
// When the last vowel in the word is

// a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
// a back vowel (a, á, o, ó, u, ú) the suffix is -nak
// Examples:
// dative("ablak") == "ablaknak"
// dative("szék") == "széknek"
// dative("otthon") == "otthonnak"

// Preconditions:
// To keep it simple: All words end with a consonant :)
// All strings are unicode strings.
// There are no grammatical exceptions in the tests.

function dative(word) {
  const str = word.replace(/[^aáoóuúeéiíöőüű]/gi, "").slice(-1);
  return "eéiíöőüű".match(str) ? word + "nek" : word + "nak";
}

//OU

function dative(word) {
  return /[aáoóuú]/.test(word) ? word + "nak" : word + "nek";
}

//OU

function dative(word) {
  var nekArr = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"];
  var nakArr = ["a", "á", "o", "ó", "u", "ú"];
  for (let i = word.length - 1; i >= 0; i--) {
    if (nekArr.indexOf(word[i]) !== -1) return word + "nek";
    if (nakArr.indexOf(word[i]) !== -1) return word + "nak";
  }
}

//OU

function dative(word) {
  let t = "a á o ó u ú".split(" ");
  switch (t.some((v) => word.includes(v))) {
    case true:
      return word + "nak";
    default:
      return word + "nek";
  }
}

//OU

function dative(word) {
  const eCase = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"];
  const aCase = ["a", "á", "o", "ó", "u", "ú"];

  let vowel = "";
  for (let i = word.length - 1; i >= 0; i--) {
    vowel = word[i];

    if (eCase.includes(vowel)) {
      return word + "nek";
    } else if (aCase.includes(vowel)) {
      return word + "nak";
    }
  }
  return word;
}
