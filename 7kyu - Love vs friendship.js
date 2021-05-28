// 7kyu - Love vs friendship

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

// Sample Tests:
// describe("Basic tests",() =>{
//   Test.assertEquals(wordsToMarks("attitude"), 100);
//   Test.assertEquals(wordsToMarks("friends"), 75);
//   Test.assertEquals(wordsToMarks("family"), 66);
//   Test.assertEquals(wordsToMarks("selfness"), 99);
//   Test.assertEquals(wordsToMarks("knowledge"), 96);
// });

function wordsToMarks(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i) - 96;
  }
  return sum;
}

//OU

function wordsToMarks(string) {
  return string.split("").reduce((acc, char) => {
    return acc + char.charCodeAt() - 96;
  }, 0);
}

//OU

function wordsToMarks(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let marks = 0;
  string.split("").forEach((char) => {
    marks += alphabet.indexOf(char) + 1;
  });
  return marks;
}

//OU

function wordsToMarks(string) {
  return [...string]
    .map((acc, index) => string.charCodeAt(index) - 96)
    .reduce((acc, b) => acc + b);
}

//OU

function wordsToMarks(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == "a") {
      sum += 1;
    } else if (string.charAt(i) == "b") {
      sum += 2;
    } else if (string.charAt(i) == "c") {
      sum += 3;
    } else if (string.charAt(i) == "d") {
      sum += 4;
    } else if (string.charAt(i) == "e") {
      sum += 5;
    } else if (string.charAt(i) == "f") {
      sum += 6;
    } else if (string.charAt(i) == "g") {
      sum += 7;
    } else if (string.charAt(i) == "h") {
      sum += 8;
    } else if (string.charAt(i) == "i") {
      sum += 9;
    } else if (string.charAt(i) == "j") {
      sum += 10;
    } else if (string.charAt(i) == "k") {
      sum += 11;
    } else if (string.charAt(i) == "l") {
      sum += 12;
    } else if (string.charAt(i) == "m") {
      sum += 13;
    } else if (string.charAt(i) == "n") {
      sum += 14;
    } else if (string.charAt(i) == "o") {
      sum += 15;
    } else if (string.charAt(i) == "p") {
      sum += 16;
    } else if (string.charAt(i) == "q") {
      sum += 17;
    } else if (string.charAt(i) == "r") {
      sum += 18;
    } else if (string.charAt(i) == "s") {
      sum += 19;
    } else if (string.charAt(i) == "t") {
      sum += 20;
    } else if (string.charAt(i) == "u") {
      sum += 21;
    } else if (string.charAt(i) == "v") {
      sum += 22;
    } else if (string.charAt(i) == "w") {
      sum += 23;
    } else if (string.charAt(i) == "x") {
      sum += 24;
    } else if (string.charAt(i) == "y") {
      sum += 25;
    } else if (string.charAt(i) == "z") {
      sum += 26;
    }
  }

  return sum;
}
