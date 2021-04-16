// 6kyu - Split Strings

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

// Sample Tests:
// const { assert } = require('chai');

// describe("Split Strings", () => {
//   it("Basic tests", () => {
//     assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//     assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//     assert.deepEqual(solution(""), []);
//   });
// });

function solution(str) {
  str = str.length % 2 !== 0 ? str + "_" : str; //ESSA LINHA É IGUAL AO IF ABAIXO, USADA MAIS EM REACT!

  //   if(str.length % 2 !== 0){
  //     str = str + '_'
  //   } else {
  //     str = str
  //   }

  let i = 0;
  const result = [];
  while (i < str.length) {
    if (i % 2 !== 0) result.push(str[i - 1] + str[i]);
    i++;
  }
  return result;
}

//OU

function solution(str) {
  str = str.length % 2 !== 0 ? str + "_" : str;

  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (i > 0 && i % 2 !== 0) result.push(str[i - 1] + str[i]);
  }
  return result;
}

//OU

function solution(str) {
  let newArray = [];

  for (let i = 0; i < str.split("").length / 2; i++) {
    newArray.push(str.substr(i * 2, 2));
    newArray.some((x) => x.length === 1)
      ? (newArray[i] = newArray[i] + "_")
      : 0;
  }
  return newArray;
}
