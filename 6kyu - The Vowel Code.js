// 6kyu - The Vowel Code

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// Sample Tests:
// describe("Sample tests", function() {
//   it("Tests", function() {
//     assert.equal(encode('hello'), 'h2ll4');
//     assert.equal(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
//     assert.equal(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
//     assert.equal(decode('h2ll4'), 'hello');
//   });
// });

function encode(string) {
  //O g, nessa REGEX quer dizer para ele continuar tentando, senão ela já pararia na primeira aparição que desse match.
  return string.replace(/[aeiou]/g, (char) => "aeiou".indexOf(char) + 1); //+1 pq o a está no index 0 e queremos que ele seja 1
}

function decode(string) {
  return string.replace(/[1-5]/g, (num) => "aeiou"[num - 1]); //-1 para ser o contrário, o 1, queremos índice 0.
}

//OU

function encode(string) {
  const vowels = "aeiou";
  return string
    .split("")
    .map((c) => {
      if (vowels.indexOf(c) !== -1) return vowels.indexOf(c) + 1;
      return c;
    })
    .join("");
}

function decode(string) {
  const numberCode = "12345";
  const vowels = "aeiou";
  return string
    .split("")
    .map((c) => {
      if (numberCode.indexOf(c) !== -1) return vowels[numberCode.indexOf(c)];
      return c;
    })
    .join("");
}

//OU

function encode(string) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
        output += "1";
        break;
      case "e":
        output += "2";
        break;
      case "i":
        output += "3";
        break;
      case "o":
        output += "4";
        break;
      case "u":
        output += "5";
        break;
      default:
        output += string[i];
    }
  }
  return output;
}

function decode(string) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "1":
        output += "a";
        break;
      case "2":
        output += "e";
        break;
      case "3":
        output += "i";
        break;
      case "4":
        output += "o";
        break;
      case "5":
        output += "u";
        break;
      default:
        output += string[i];
    }
  }
  return output;
}

//OU

let change = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};
// turn vowels into numbers
function encode(string) {
  return string
    .split("")
    .map((e) => {
      return change[e] ? change[e] : e;
    })
    .join("");
}

//turn numbers back into vowels
function decode(string) {
  return string
    .split("")
    .map((e) => {
      return parseInt(e) <= 5 ? Object.keys(change)[e - 1] : e;
    })
    .join("");
}

//OU

const vowels = [..."aeiou"];

function encode(string) {
  vowels.forEach(
    (vowel, index) => (string = string.split(vowel).join(index + 1))
  );
  return string;
}

function decode(string) {
  vowels.forEach(
    (vowel, index) => (string = string.split(index + 1).join(vowel))
  );
  return string;
}

//OU

const change = new Map([
  ["a", 1],
  ["e", 2],
  ["i", 3],
  ["o", 4],
  ["u", 5],
]);

const reverse = new Map([
  ["1", "a"],
  ["2", "e"],
  ["3", "i"],
  ["4", "o"],
  ["5", "u"],
]);

function encode(string) {
  return string
    .split("")
    .map((one) => change.get(one) || one)
    .join("");
}

function decode(string) {
  return string
    .split("")
    .map((one) => reverse.get(one) || one)
    .join("");
}
