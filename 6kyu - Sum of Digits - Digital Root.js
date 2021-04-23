// 6kyu - Sum of Digits - Digital Root

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// Sample Tests:

// Test.assertEquals( digital_root(16), 7 )
// Test.assertEquals( digital_root(456), 6 )

function digital_root(n) {
  let str = String(n).split(""); //SPLIT SÓ FUNCIONA EM STRING! String() = toString()
  let sum = str.reduce((a, b) => a + Number(b), 0);
  //a = acumulador, b = cada índice, então só ele precisa voltar a ser número. 0 = começa no índice 0.
  str = String(sum).split("");
  while (str.length > 1) {
    sum = str.reduce((a, b) => a + Number(b), 0);
    str = String(sum).split("");
  }
  return sum;
}

//OU

function digital_root(n) {
  let total = 0;
  String(n)
    .split("")
    .map((x) => {
      total += Number(x);
    });
  if (total >= 10) {
    return digital_root(total);
  } else {
    return total;
  }
}

//OU

function digital_root(n) {
  n = n.toString().split("");
  let result = 0;
  for (let i = 0; i < n.length; i++) {
    result += parseInt(n[i]); //parseInt() = Number()
  }
  return result < 10 ? result : digital_root(result);
}

//OU

function digital_root(n) {
  if (n < 10) return n;

  let sum = String(n)
    .split("")
    .reduce((a, b) => a + parseInt(b), 0);
  return digital_root(sum); // aqui você chama a própria função para fazer o loop, até ficar em uma única casa decimal.
}

// OU

function digital_root(n) {
  if (n === 0) return 0;
  if (n % 9 === 0) return 9;

  return n % 9; //como é apenas uma casa decimal, basta pegar o módulo 9 dos números.
}

//OU

function digital_root(n) {
  return ((n - 1) % 9) + 1;
  //aqui não funcionaria, quando o número fosse 9, pois 9 módulo 9 é 0, então precisa dessa artimanha de diminuir um, depois somar um.
}
