// 7kyu - Sum of array singles

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

// describe("Basic tests", function(){
//   Test.assertEquals(repeats([4,5,7,5,4,8]),15);
//   Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
//   Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
//   Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
//   Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);
//   });

//Lembrando que o indexOf e o lastIndexOf mostram o ÍNDICE do elemento, a posição no array, então se forem iguais os index, é porque o elemento NÃO REPETE.
function repeats(arr) {
  return arr
    .filter((x) => arr.indexOf(x) === arr.lastIndexOf(x))
    .reduce((total, number) => total + number, 0);
}

//OU:

function repeats(arr) {
  const singles = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
    if (count === 1) singles.push(arr[i]);
  }
  return singles.reduce((a, v) => a + v, 0);
}

//OU

function repeats(arr) {
  let repeat = [];
  arr.sort((a, b) => a - b);
  //   console.log(arr)
  for (i = 0; i < arr.length; i++) {
    switch (i) {
      case 0:
        if (arr[i] !== arr[i + 1]) repeat.push(arr[i]);
        break;
      case arr.length - 1:
        if (arr[i] !== arr[i - 1]) repeat.push(arr[i]);
        break;
      default:
        if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) repeat.push(arr[i]);
        break;
    }
  }
  return repeat.reduce((a, b) => a + b, 0);
}
