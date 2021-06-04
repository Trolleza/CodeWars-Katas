// 7kyu - Limit string length - 1

// The function must return the truncated version of the given string up to the given limit followed by "..." if the result is shorter than the original. Return the same string if nothing was truncated.

// Example:
// solution('Testing String', 3) --> 'Tes...'
// solution('Testing String', 8) --> 'Testing ...'
// solution('Test', 8)           --> 'Test'

let solution = (string, n) => (string[n] ? string.slice(0, n) + "..." : string);

//OU

function solution(string, limit) {
  return string.length > limit ? string.substr(0, limit) + "..." : string;
}

//OU

function solution(string, limit) {
  return string.length > limit ? string.slice(0, limit) + "..." : string;
}

//OU

function solution(string, limit) {
  if (limit < string.length) {
    return string.slice(0, limit) + "...";
  } else {
    return string;
  }
}

//OU

const solution = (string, limit) =>
  limit >= string.length ? string : `${string.slice(0, limit)}...`;
