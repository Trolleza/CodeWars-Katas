// 5kyu - Valid Parentheses

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints
// 0 <= input.length <= 100

// Sample Tests:

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(validParentheses( "()" ), true);
// Test.assertEquals(validParentheses( "())" ), false);
//   });
// });

function validParentheses(parens) {
  let arr = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === ")") {
      if (arr.length <= 0) {
        return false;
      } else {
        arr.shift(); //ou arr.pop()
      }
    }
    if (parens[i] === "(") {
      arr.push(")");
    }
  }

  return arr.length ? false : true; //tá retornando length? ou seja, ela não é 0?
}

//OU

function validParentheses(parens) {
  while (parens.includes("()")) {
    parens = parens.replace("()", ""); //Eu troco os "()" por uma string vazia, pois ela já achou seu parzinho e pode ser retirada!
  }
  return parens.length === 0; //OU: return !parens.length
  //Se o length for 0, é porque todos acharam seu parzinho!
}

//OU

function validParentheses(parens) {
  while (parens.indexOf("()") !== -1) {
    parens = parens.replace("()", ""); //Eu troco os "()" por uma string vazia, pois ela já achou seu parzinho e pode ser retirada!
  }
  return !parens.length; //OU: return parens.length === 0;
  //Se o length for 0, é porque todos acharam seu parzinho!
}

//OU

function validParentheses(parens) {
  let acc = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == "(") acc++; //se surgir um "(" adiciona 1 no contador
    if (parens[i] == ")") acc--; //se surgir um ")" diminui 1 no contador
    if (acc < 0) return false;
  }
  return acc === 0;
}

//OU

function validParentheses(parens) {
  return (
    parens.split("").reduce((acc, i) => {
      return acc >= 0 ? acc + { "(": 1, ")": -1 }[i] : -1; //se o acc for >= a 0, no "(" eu adiciono 1 no acc, se for ")" eu diminuo 1 no acc, em cada [i].
      //se o acc não for maior que 0, eu atribuo -1.
    }, 0) === 0 //começando do índice 0, eu só quero essa resolução cuja length seja === 0
  );
}
