// 7kyu - Lottery Machine

// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

// Examples
// "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
// "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
// "555"                   -->  "5"

// Sample Tests:
// describe("Initial tests", function() {
//   Test.assertSimilar(lottery("wQ8Hy0y5m5oshQPeRCkG"), "805", "should return unique integer(s) or a string");
//   Test.assertSimilar(lottery("ffaQtaRFKeGIIBIcSJtg"),"One more run!", "should return unique integer(s) or a string");
//   });

function lottery(str) {
  return [...new Set(str.replace(/\D/g, ""))].join("") || "One more run!";
}

// OU

function lottery(str) {
  res = str
    .replace(/[a-zA-Z]/g, "")
    .split("")
    .filter((x, n, s) => s.indexOf(x) == n)
    .join("");
  return res ? res : "One more run!";
}

// OU

function lottery(str){
  const chars = str.split("");
  const digitsFiltered = chars.filter(char => char >= 0)
  const removedDuplicatedDigits = [...new Set(digitsFiltered)].join("")
  
  return removedDuplicatedDigits.length > 0 ? removedDuplicatedDigits : "One more run!"
}

//OU

function lottery(str) {
  let a = str
    .split("")
    .map((x) => +x) //ESSE + SIGNIFICA NÚMEROS
    .filter((x) => x >= 0);

  if (typeof a[0] === "number") {
    return [...new Set(a)].join("");
  } else return "One more run!";
}
