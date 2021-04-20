// 6kyu - Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
// Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);

function findUniq(arr) {
  return arr.find((element) => {
    //O FIND JÁ RETORNA O ELEMENTO
    return arr.indexOf(element) === arr.lastIndexOf(element); //VÊ SE O ÍNDICE DO ELEMENTO é IGUAL AO ÚLTIMO ÍNDICE DO ELEMENTO, se for, ele é único!
  });
}

//OU

function findUniq(arr) {}

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0]; //como está ordenado, se o índice 0, for igual ao índice 1, o último índice só pode ser o único, pois o exercídio só dá 2 tipos de números diferentes!!!
}

//OU

function findUniq(arr) {
  arr = arr.sort();
  if (arr[0] === arr[1]) {
    return arr[arr.length - 1]; //último índice.
  } else {
    return arr[0]; //primeiro índice.
  }
}
