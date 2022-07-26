// 7kyu - Duplicate sandwich

// Description:

// Task

// In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

// Your task is to output a list of everything inbetween both occurrences of this element in the list.
// Examples:

// [0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
// ["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
// [0, 0] => []
// [true, false, true] => [false]
// "example" => "xampl"

const duplicateSandwich = (list) => {
  let duplicated = [...list].find(
    (a) => list.indexOf(a) !== list.lastIndexOf(a)
  );
  return list.slice(list.indexOf(duplicated) + 1, list.lastIndexOf(duplicated));
};

//OU

function duplicateSandwich(a) {
  for (let i = 0; i < a.length - 1; i++)
    if (a.indexOf(a[i]) !== a.lastIndexOf(a[i]))
      return a.slice(a.indexOf(a[i]) + 1, a.lastIndexOf(a[i]));
}

//OU

function duplicateSandwich(a) {
  for (let i = 0; i < a.length; i++)
    if (i != a.lastIndexOf(a[i])) return a.slice(i + 1, a.lastIndexOf(a[i]));
}

//OU

function duplicateSandwich(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = a.length; j > i; j--) {
      if (a[i] === a[j]) return a.slice(i + 1, j);
    }
  }
}
