// function smaller(arr)
// that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

// For example:
// smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
// smaller([1, 2, 0]) === [1, 1, 0]

// describe('Initial Tests', _ => {
//     Test.assertSimilar(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
//     Test.assertSimilar(smaller([1, 2, 3]), [0, 0, 0]);
//     Test.assertSimilar(smaller([1, 2, 0]), [1, 1, 0]);
//     Test.assertSimilar(smaller([1, 2, 1]), [0, 1, 0]);
//     Test.assertSimilar(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
//     Test.assertSimilar(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);
// });

function smaller(nums) { //ele quer saber quantos elementos à direita, são menores que o elemento atual.
  const aux = []; //array auxiliar para retorno da resposta
  for (let i = 0; i < nums.length; i++) { //p cada elemento, verifico os restantes à direita para ver quantos à direita são menores que o [i] atual.
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) { //esse olhará o próximo índice
      if(nums[j] < nums[i]) {
        count++; //aumenta o contador
      }
    }
    aux.push(count); //adiciona o contador na array
  }
  return aux;
}