// 7kyu - Longest vowel chain

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Sample Tests:
// describe("Basic tests", function(){
//   Test.assertEquals(solve("codewarriors"),2);
//   Test.assertEquals(solve("suoidea"),3);
//   Test.assertEquals(solve("ultrarevolutionariees"),3);
//   Test.assertEquals(solve("strengthlessnesses"),1);
//   Test.assertEquals(solve("cuboideonavicuare"),2);
//   Test.assertEquals(solve("chrononhotonthuooaos"),5);
//   Test.assertEquals(solve("iiihoovaeaaaoougjyaw"),8);
//   });

const solve = (s, n = 0) =>
  Math.max(
    ...s.split("").map((el) => ("aeiou".includes(el) ? (n += 1) : (n = 0)))
  );

//OU

function solve(s) {
  l = s.match(/[aoiue]+/g);
  l1 = l.reduce((x, y) => (x.length > y.length ? x : y));
  return l1.length;
}

//OU

let solve = (s) => Math.max(...s.match(/[aeiou]+/g).map((x) => x.length));

//OU

function solve(s) {
  return Math.max(...s.split(/[^aeiou]+/).map((x) => x.length));
}

//OU

function solve(str) {
  let vowels = [],
    counter = 0;

  for (let char of str)
    if ("aeiou".includes(char)) {
      vowels.push(char);
    } else {
      if (vowels.length > counter) {
        counter = vowels.length;
      }
      vowels = [];
    }
  return counter;
}

//OU

function solve(s) {
  let cur = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if ("aeiou".includes(s[i])) {
      cur++;
      if (cur > max) {
        max = cur;
      }
    } else {
      cur = 0;
    }
  }
  return max;
}

//OU

const solve = (s) =>
  s.split(/[^aeiou]/).reduce((s, n) => Math.max(s, n.length), 0);

//OU

function solve(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  let highestCount = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (vowels.includes(s[i]) && vowels.includes(s[i + 1])) {
      count++;
    } else {
      if (highestCount < count) highestCount = count;
      count = 1;
    }
  }
  return highestCount;
}
