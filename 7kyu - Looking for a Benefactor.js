// 7kyu - Looking for a Benefactor

// The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he made a mistake. Could you help him?

// if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149 (***Ou seja, precisamos pegar o total de donators que vai ser 7+1, multiplicar isso pela nova quantia donatada que é 30 e depois diminuimos o valor doado das primeiras 7 pessoas que é 91, esse total dá 149!***)

// The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.

// Should the last donation be a non positive number (<= 0) John wants us to throw (or raise) an error or

// return Nothing in Haskell
// return None in F#, Ocaml, Scala
// return -1 in C, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua
// echo ERROR in Shell
// raise-argument-error in Racket
// so that he clearly sees that his expectations are not great enough.

// Notes:

// all donations and navg are numbers (integers or floats), arr can be empty.
// See examples below and "Test Samples" to see which return is to be done.
// new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
// new_avg([14, 30, 5, 7, 9, 11, 15], 2)  should raise an error (ValueError or invalid_argument or argument-error or DomainError)
// or return `-1` or ERROR or Nothing or None depending on the language.

// Sample Tests:
// function testing(actual, expected) {
//   Test.assertEquals(actual, expected)
// }

// describe("newAvg",function() {
// it("Basic tests",function() {
//   testing(newAvg([14, 30, 5, 7, 9, 11, 16], 90), 628);
//   testing(newAvg([14, 30, 5, 7, 9, 11, 15], 92), 645);
//   Test.expectError("", function(){ newAvg([14, 30, 5, 7, 9, 11, 15], 2); });
// })})

function newAvg(arr, newavg) {
  const avg = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0); //reduce soma todos o elementos do arr, com valor inicial de 0.
  if (avg <= 0) throw "ValueError";
  return Math.ceil(avg); //Math.ceil arredonda para baixo.
}

//OU

let newAvg = (arr, newavg) => {
  if (arr.reduce((a, b) => a + b, 0) / arr.length > newavg) {
    throw Error();
  } else {
    return Math.ceil(
      newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0)
    );
  }
};

//OU

function newAvg(arr, newavg) {
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i]; //Aqui a soma dá 91!
  }

  let numWeNeed = newavg * (arr.length + 1); //E aqui é o tanto de donators 7 + 1

  if (Math.ceil(numWeNeed - totalSum) <= 0) throw "ERROR";

  return Math.ceil(numWeNeed - totalSum);
}

//OU

function newAvg(arr, newavg, sum = 0) {
  for (var i = 0; i < arr.length; i++) {
    //SÓ FUNCIONA COM VAR!
    sum += arr[i]; //aqui dá 91
  }
  if (++i * newavg > sum) return Math.ceil(i * newavg - sum);
  else throw "error";
}
