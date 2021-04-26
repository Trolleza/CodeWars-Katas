// 7kyu - String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// Sample Tests:
// Test.assertEquals(solution('abcde', 'cde'), true)
// Test.assertEquals(solution('abcde', 'abc'), false)

function solution(str, ending) {
  return str.substr(str.length - ending.length) === ending;
}

// OU

function solution(str, ending) {
  return (
    str.lastIndexOf(ending) > -1 &&
    str.lastIndexOf(ending) == str.length - ending.length
  );
}

//OU

function solution(str, ending) {
  // vamos supor que: str = "abcde" e ending = "cde"
  let a = str.slice(str.length - ending.length); // 5 (length do str) - 3 (length do ending) = 2, o slice vai cortar DO ÍNDICE 2, até o final! = CDE
  return a === ending;
}

// OU

function solution(str, ending) {
  if (ending === "") return true;
  let done = str.slice(-ending.length);
  return done === ending;
}

//OU

function solution(str, ending) {
  const auxArr = str.split("").reverse();
  const compareArr = ending.split("").reverse();

  let isEqual = true;

  for (let i = 0; i < compareArr.length; i++) {
    if (auxArr[i] !== compareArr[i]) isEqual = false;
  }
  return isEqual;
}
