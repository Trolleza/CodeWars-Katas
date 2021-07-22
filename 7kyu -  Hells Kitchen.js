// 7kyu -  Hells Kitchen

// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

// Sample Tests:
// Test.assertEquals(gordon('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
// Test.assertEquals(gordon('are you stu pid'), '@R*!!!! Y**!!!! ST*!!!! P*D!!!!');
// Test.assertEquals(gordon('i am a chef'), '*!!!! @M!!!! @!!!! CH*F!!!!');

function gordon(a){
  let caps = a.toUpperCase();
  let answer = [];
  for(let i = 0; i < caps.length; i++) {
    if (caps[i] === "A") {
      answer += "@"
    } else if (caps[i] === "E" || caps[i] === "O" || caps[i] === "U" || caps[i] === "I") {
      answer += "*"
    } else {
      answer += caps[i]
    }
  }
  let answer2 = answer.split(" ").map((x) => x + "!!!!").join(" ")
  return answer2
}

//OU

const gordon = (a) =>
  a
    .toUpperCase()
    .split(" ")
    .map((a) => a.replace(/A/g, "@").replace(/[EIOU]/g, "*") + "!!!!")
    .join(" ");

//OU

function gordon(a) {
  a = a.replace(/[a]/gi, "@").replace(/[eiou]/gi, "*");
  a = a
    .split(" ")
    .map((v) => v + "!!!!")
    .join(" ");
  return a.toUpperCase();
}

//OU

const ramsify = (word) =>
  [...word]
    .map((char) => {
      if ("EIOU".includes(char)) return "*";
      if (char === "A") return "@";
      return char;
    })
    .join("") + "!!!!";

const gordon = (a) =>
  a
    .toUpperCase()
    .split(" ")
    .map((word) => ramsify(word))
    .join(" ");
