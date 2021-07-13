// 7kyu -  Holiday VII - Local Talk

// In Bali, as far as I can gather, when ex-pats speak to locals, they basically insert the word 'Pak' as often as possible. I am assured it means something like 'mate' or 'sir' but that could be completely wrong.

// Anyway, as some basic language education(??) this kata requires you to turn any sentence provided (s) into ex-pat balinese waffle by inserting the word 'pak' between every other word. Simple 8kyu :D

// Pak should not be the first or last word. Strings of just spaces should return an empty string.

// Sample Tests:
// Test.assertEquals(pak('Man I need a taxi up to Ubud'), 'Man pak I pak need pak a pak taxi pak up pak to pak Ubud');
// Test.assertEquals(pak('What time are we climbing up the volcano?'), 'What pak time pak are pak we pak climbing pak up pak the pak volcano?');
// Test.assertEquals(pak('Take me to Semynak!'), 'Take pak me pak to pak Semynak!');

var pak = function (s) {
  return s.trim().split(" ").join(" pak ");
};

//OU

function pak(s) {
  if (s[0] === " ") return "";
  let s2 = s.split(" ").map((el) => el + " pak");
  return s2.join(" ").split(" ").slice(0, -1).join(" ");
}

//OU

function pak(s) {
  return s.trim() ? s.split(" ").join(" pak ") : "";
}

//OU

function pak(s) {
  if (s === "") return s;
  let arr = s.split(" ");
  let pakArr = arr.map((x) => (x === "" ? "" : x + " pak"));
  let pak = pakArr.join(" ");
  return s === "" ? "" : pak.slice(0, pak.length - 4);
}

//OU

function pak(s) {
  return s
    .split(" ")
    .filter((e) => e.length)
    .join(" pak ");
}

//OU

const pak = (s) => {
  s = s.trim();
  let words = s.split(" ");
  for (let i = 0; i < words.length - 1; i++) words[i] += " pak ";
  return words.join("");
};

//OU

const pak = (str) => {
  let words = str.split(" ").filter((w) => w);
  let res = [];
  for (let i = 0; i < words.length; i++) {
    res.push(words[i]);
    if (i !== words.length - 1) res.push("pak");
  }
  return res.join(" ");
};

//OU

function pak(s) {
  if (!s.trim()) {
    return "";
  }
  let arr = s.split(" ");
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      ans += `${arr[i]} pak `;
    } else {
      ans += `${arr[i]}`;
    }
  }
  return ans;
}
