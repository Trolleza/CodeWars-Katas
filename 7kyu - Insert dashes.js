//7kyu - Insert dashes

// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

// Note that the number will always be non-negative (>= 0).

function insertDash(number) {
  return `${number}`.replace(/(?<=[13579])(?=[13579])/g, "-");
}

//OU

//map(valorAtual, indice, array)
// O valorAtual é obrigatório e representa o próprio item da iteração atual. Ou seja, à medida que a função map itera sobre o array, esse parâmetro receberá cada item.
// O indice é opcional e representa o índice do item da iteração atual.
// O array também é opcional e representa o próprio array ao qual os itens pertencem.
function insertDash(num) {
  return String(num)
    .split("")
    .map((va, i, arr) =>
      arr[i - 1] % 2 != 0 && arr[i] % 2 != 0 && i != 0 ? -va : va
    )
    .join("");
}

//OU

// A função reducer recebe quatro parâmetros:
// Acumulador (acc)
// Valor Atual (cur)
// Index Atual (idx)
// Array original (src)

// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))

const insertDash = (n) =>
  n
    .toString()
    .split("")
    .reduce(
      (acc, cur, idx, src) =>
        acc + (idx > 0 && cur % 2 && src[--idx] % 2 ? "-" : "") + cur,
      ""
    );

//OU

const insertDash = (num) =>
  String(num)
    .split("")
    .map((v, i, arr) =>
      i !== 0 && arr[i] % 2 !== 0 && arr[i - 1] % 2 !== 0 ? `-${v}` : v
    )
    .join("");

//OU

function insertDash(num) {
  let numbers = num.toString();
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    if (i > 0 && numbers[i - 1] % 2 !== 0 && numbers[i] % 2 !== 0) {
      result += "-" + numbers[i];
    } else {
      result += numbers[i];
    }
  }
  return result;
}

//OU

function insertDash(num) {
  let numbers = "" + num;
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    if (i > 0 && numbers[i - 1] % 2 !== 0 && numbers[i] % 2 !== 0) {
      result += "-";
    }
    result += numbers[i];
  }
  return result;
}

//OU

function insertDash(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, c, i, arr) => {
      if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0) {
        acc = acc + "-";
      }
      return acc + c;
    }, "");
}

//OU

function insertDash(num) {
  var arr = num.toString().split("").join("-").split("");
  for (var i = 1; i < arr.length - 1; i = i + 2) {
    if (arr[i - 1] % 2 == 0 || arr[i + 1] % 2 == 0) {
      arr[i] = "";
    }
  }
  arr = arr.join("");

  return arr;
}
