// 7kyu -  Happy Birthday, Darling!

// As you may know, once some people pass their teens, they jokingly only celebrate their 20th or 21st birthday, forever. With some maths skills, that's totally possible - you only need to select the correct number base!

// For example, if they turn 32, that's exactly 20 - in base 16... Already 39? That's just 21, in base 19!

// Your task is to translate the given age to the much desired 20 (or 21) years, and indicate the number base, in the format specified below.

// Note: input will be always > 21

// Examples:
// 32  -->  "32? That's just 20, in base 16!"
// 39  -->  "39? That's just 21, in base 19!"

// Sample Tests:
//     assert.strictEqual(womensAge(32), "32? That's just 20, in base 16!");
//     assert.strictEqual(womensAge(39), "39? That's just 21, in base 19!");
//     assert.strictEqual(womensAge(22), "22? That's just 20, in base 11!");
//     assert.strictEqual(womensAge(65), "65? That's just 21, in base 32!");
//     assert.strictEqual(womensAge(83), "83? That's just 21, in base 41!");

let womensAge = (n) =>
  `${n}? That's just ${20 + (n % 2)}, in base ${Math.floor(n / 2)}!`;

//OU

function womensAge(n) {
  let alternativeAgeBase = Math.floor(n / 2);
  let alternativeAge = n % 2 ? 21 : 20;

  return `${n}? That\'s just ${alternativeAge}, in base ${alternativeAgeBase}!`;
}

//OU

function womensAge(n) {
  const age = n % 2 == 0 ? 20 : 21;

  return `${n}? That's just ${age}, in base ${Math.floor(n / 2)}!`;
}
