// 7kyu -  How many animals are there?

// From a sentence, deduce the total number of animals.

// For example :

// "I see 3 zebras, 5 lions and 6 giraffes." The answer must be 14

// "Mom, 3 rhinoceros and 6 snakes come to us!" The answer must be 9

function countAnimals(sentence) {
  // Your code here
  let arr = sentence.split(" ");
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] % 1 == 0) {
      result += +arr[i];
    }
  }
  return result;
}

//OU

function countAnimals(sentence) {
  let x = 0;
  return sentence.replace(/\d+/g, (m) => (x += +m)), x;
}

//OU

const countAnimals = (s) =>
  s.split(" ").reduce((total, str) => {
    let num = Number(str);
    if (num) total += num;
    return total;
  }, 0);

//OU

function countAnimals(sentence) {
  return sentence
    .split(" ")
    .map((v) => parseInt(v) || 0)
    .reduce((a, b) => a + b);
}
