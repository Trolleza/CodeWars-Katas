// 7kyu - Indexed capitalization

// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

function capitalize(s, arr) {
  console.log(typeof s, typeof arr);
  let split = s.split("");
  for (i = 0; i < arr.length; i++)
    if (split[arr[i]]) split[arr[i]] = split[arr[i]].toUpperCase();
  return split.join("");
}

//OU

function capitalize(s, arr) {
  return [...s].map((x, i) => (arr.includes(i) ? x.toUpperCase() : x)).join("");
}

//OU

function capitalize(str, arr) {
  const arrLetters = [...str];
  arr.map((el) =>
    el > str.length ? "" : (arrLetters[el] = arrLetters[el].toUpperCase())
  );
  return arrLetters.join("");
}
