// 7kyu - Capitals first!

// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

// If a word starts with a number or special character, skip the word and leave it out of the result.

// Input String will not be empty.

// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

// Sample Tests:
// Test.assertEquals(capitalsFirst("hey You, Sort me Already!"), "You, Sort Already! hey me")

const capitalsFirst = (string) =>
  [
    ...string.split(" ").filter(([firstLetter]) => /[A-Z]/.test(firstLetter)),
    ...string.split(" ").filter(([firstLetter]) => /[a-z]/.test(firstLetter)),
  ].join(" ");

//OU

function capitalsFirst(str) {
  let words = str.split(" ");
  let upper = words.filter(function (x) {
    return x.charAt(0).match(/[A-Z]/);
  });
  let lower = words.filter(function (x) {
    return x.charAt(0).match(/[a-z]/);
  });
  return upper.concat(lower).join(" ");
}

//OU

function capitalsFirst(str) {
  let words = str.split(" ");
  let leftArr = [],
    rightArr = [];

  for (let word of words) {
    console.log(word);
    if (
      word[0] === word[0].toUpperCase() &&
      word[0].toUpperCase() !== word[0].toLowerCase()
    )
      leftArr.push(word);
    if (
      word[0] === word[0].toLowerCase() &&
      word[0].toUpperCase() !== word[0].toLowerCase()
    )
      rightArr.push(word);
  }

  return [...leftArr, ...rightArr].join(" ");
}

//OU

const capitalsFirst = (s) =>
  s.split` `
    .filter((e) => /^[a-z]/i.test(e))
    .sort(
      (x, y) => (y[0] === y[0].toUpperCase()) - (x[0] === x[0].toUpperCase())
    ).join` `;

//OU

function capitalsFirst(str) {
  let arr = str.split(" ");
  let capitalized = arr.filter((e) => e.charAt(0).match(/[A-Z]/g));
  let smallCaps = arr.filter((e) => e.charAt(0).match(/[a-z]/g));
  return [...capitalized, ...smallCaps].join(" ");
}

//OU

function capitalsFirst(str) {
  const uppers = str
    .split(" ")
    .filter(
      (word) =>
        word[0] === word[0].toUpperCase() &&
        !/[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(word[0])
    );
  const lowers = str
    .split(" ")
    .filter(
      (word) =>
        word[0] === word[0].toLowerCase() &&
        !/[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(word[0])
    );
  return [...uppers, ...lowers].join(" ");
}

//OU

function capitalsFirst(str) {
  return (
    str
      .split(" ")
      .filter((e) => e[0].match(/[A-Z]/g))
      .join(" ") +
    " " +
    str
      .split(" ")
      .filter((e) => e[0].match(/[a-z]/g))
      .join(" ")
  ).trim();
}
