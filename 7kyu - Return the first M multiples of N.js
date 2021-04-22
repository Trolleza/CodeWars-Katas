// 7kyu - Return the first M multiples of N

// Instructions

// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5.0)
// should return

// [5.0, 10.0, 15.0]

// Sample Tests:
// Test.assertDeepEquals(multiples(3, 5), [5, 10, 15])

function multiples(m, n) {
  let arr = [];
  for (let i = 1; i <= m; i++) {
    //2 opção: for (let i = 0; i < m; i++) {
    arr.push(n * i); //2 opção: arr.push(n * (i + 1));
  }
  return arr;
}

//OU

// function multiples(m, n) {
//   let arr = [];
//   for (let i = 1; arr.length < m; i++) {      NÃO É A MELHOR SOLUÇÃO!!! DÁ TIMEOUT!
//     if (i % n === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

//OU

function multiples(m, n) {
  let result = [];

  while (m > 0) {
    //OU: (m !== 0)
    result.unshift(m * n); //vai multiplicar o n pelo elemento e adicionar no começo da array.
    m--; //e tirar esse m que multiplicou.
  }
  return result;
}

//OU

function multiples(m, n) {
  const arr = new Array(m);
  const filledArr = arr.fill(1);
  return filledArr.map((num, index) => {
    return (index + 1) * n;
  });
}
