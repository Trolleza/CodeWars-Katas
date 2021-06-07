//7kyu - Laxative Shot Roulette

// Description
// Peter enjoys taking risks, and this time he has decided to take it up a notch!

// Peter asks his local barman to pour him n shots, after which Peter then puts laxatives in x of them. He then turns around and lets the barman shuffle the shots. Peter approaches the shots and drinks a of them one at a time. Just one shot is enough to give Peter a runny tummy. What is the probability that Peter doesn't need to run to the loo?

// Task
// You are given:

// n - The total number of shots.

// x - The number of laxative laden shots.

// a - The number of shots that peter drinks.

// return the probability that Peter won't have the trots after drinking. n will always be greater than x, and a will always be less than n.

// You must return the probability rounded to two decimal places i.e. 0.05 or 0.81

// Sample Tests:
// describe("Solution", function(){
//   it("should test for something", function(){
//     Test.assertEquals("actual", "expected", "This is just an example of how you can write your own TDD tests");
//     Test.assertEquals( getChance(2, 1, 1),0.5, 0);
//     Test.assertEquals( getChance(4, 1, 3),0.25, 0);
//     Test.assertEquals( getChance(100, 10, 10),0.33, 0);
//   });
// });

function getChance(n, x, a) {
  let res = 1;
  for (let i = 0; i < a; i++) {
    res = res * (1 - x / (n - i));
  }
  return parseFloat(res.toFixed(2));
}

//OU

function getChance(n, x, a) {
  let chance = 1;
  while (a > 0) {
    chance = ((n - x) / n) * chance;
    n--;
    a--;
  }
  return Math.round(chance * 100) / 100;
}

//OU

function getChance(n, x, a) {
  probability = 1;
  for (i = 0; i < a; i++) {
    probability *= (n - x) / n;
    n -= 1;
  }
  return Math.round(probability * 100) / 100;
}

//OU

function getChance(n, x, a) {
  let res = 1;
  for (let i = 0; i < a; i++) {
    res *= (n - x - i) / (n - i);
  }
  return +res.toFixed(2);
}
