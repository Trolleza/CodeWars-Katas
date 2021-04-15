// 7 kyu - How many animals are there?

// From a sentence, deduce the total number of animals.

// For example :

// "I see 3 zebras, 5 lions and 6 giraffes." The answer must be 14

// "Mom, 3 rhinoceros and 6 snakes come to us!" The answer must be 9

//TESTS:
// Test.assertEquals(countAnimals("I see 3 zebras, 5 lions and 6 giraffes."), 14, 'Live from the Savannah')
// Test.assertEquals(countAnimals("Mom, 3 rhinoceros and 6 snakes come to us!"), 9, 'Close the car !')
// Test.assertEquals(countAnimals("I do not see any animals here!"), 0, 'Live from the kitchen')

function countAnimals(sentence) {
  let sum = 0;
  sentence.split(' ').forEach((e)=> {
    if (!isNaN(e)){
      sum+=parseInt(e)
    }
  })
  return sum
}

//OU

const countAnimals = s => s.split(" ").reduce((total, str) => {
    let num = Number(str);
    if(num) {
      total += num;
    }
    return total;
  }, 0);

//OU

function countAnimals(sentence) {
  let result = []
  sentence.split(' ').forEach(function(x) {
    if(parseInt(x) >= 0)
      result.push(parseInt(v))
  })
  let total = result.reduce((a,b) => a + b, 0)
  return total
}

//OU

function countAnimals(sentence) {
  let num = 0;
  let arr = sentence.split(' ');
  for(let i = 0; i < arr.length; i++){
    if(parseInt(arr[i]) >= 0)
      num += parseInt(arr[i])
  }
  return num
}