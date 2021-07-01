//7kyu - Initialize my name

// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNames(name) {
  let n = name.split(" ");
  for (let i = 1; i < n.length - 1; i++) {
    n[i] = n[i][0] + ".";
  }
  return n.join(" ");
}

//OU

//map(valorAtual, indice, array)
// O valorAtual é obrigatório e representa o próprio item da iteração atual. Ou seja, à medida que a função map itera sobre o array, esse parâmetro receberá cada item.
// O indice é opcional e representa o índice do item da iteração atual.
// O array também é opcional e representa o próprio array ao qual os itens pertencem.
function initializeNames(name) {
  return name
    .split(" ")
    .map((va, ind, arr) =>
      ind == 0 || ind == arr.length - 1 ? va : va[0] + "."
    )
    .join(" ");
}

//OU

function initializeNames(name) {
  let n = name.split(" ");
  return n
    .map((va, ind) =>
      ind == 0 || ind == n.length - 1 ? va : va.slice(0, 1) + "."
    )
    .join(" ");
}

//OU

function initializeNames(name) {
  let arr = name.split(" ");
  if (arr.length < 3) return name;
  return [
    arr[0],
    ...arr.slice(1, -1).map(([i]) => i + "."),
    arr[arr.length - 1],
  ].join(" ");
}

//OU

function initializeNames(name) {
  let arr = name.split(" ");
  for (let i = 1; i < arr.length - 1; i++) {
    arr[i] = arr[i].charAt(0) + ".";
  }
  return arr.join(" ");
}
