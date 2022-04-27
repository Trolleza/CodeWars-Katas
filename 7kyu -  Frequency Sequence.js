// 7kyu -  Frequency sequence

// Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

// freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
// freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
// freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"

// Test.assertEquals(freqSeq('hello world', '-'), '1-1-3-3-2-1-1-2-1-3-1');
// Test.assertEquals(freqSeq('19999999',    ':'), '1:7:7:7:7:7:7:7');
// Test.assertEquals(freqSeq('^^^**$',      'x'), '3x3x3x2x2x1');

function freqSeq(str, sep) {
  return str
    .split("")
    .map((value, index, arr) => arr.filter((x) => x == value).length)
    .join(sep);
}

//OU

const freqSeq = (str, sep) =>
  str
    .split("")
    .map((i) => str.split(i).length - 1)
    .join(sep);

//OU

const freqSeq = (str, sep) =>
  [...str].map((x) => --str.split(x).length).join(sep);

//OU

function freqSeq(str, sep) {
  let obj = {};
  str.split("").forEach((x) => (obj[x] = (obj[x] || 0) + 1));
  return str
    .split("")
    .map((a) => obj[a])
    .join(sep);
}

//OU

function freqSeq(str, sep) {
  let lets = (x) => [...str].filter((y) => y === x).length;
  return [...str].map(lets).join(sep);
}

//OU

function freqSeq(str, sep) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    output += str.split(str[i]).length - 1;
    output += sep;
  }
  return output.slice(0, -1);
}
