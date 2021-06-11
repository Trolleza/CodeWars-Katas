//7kyu - L2: Triple X

// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// tripleX("abraxxxas") → true
// tripleX("xoxotrololololololoxxx") → false
// tripleX("softX kitty, warm kitty, xxxxx") → true
// tripleX("softx kitty, warm kitty, xxxxx") → false
// Note :

// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false

// Sample Tests:
// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(tripleX("abraxxxas"),true);
// Test.assertEquals(tripleX("xoxotrololololololoxxx"),false);
// Test.assertEquals(tripleX("soft kitty, warm kitty, xxxxx"),true);
// Test.assertEquals(tripleX("softx kitty, warm kitty, xxxxx"),false);
//   });
// });

function tripleX(str) {
  const idx = str.indexOf('x');
  return str[idx + 1] == 'x' && str[idx + 2] == 'x';
}

//OU

const tripleX = str => str.indexOf('x') >= 0 ? str.indexOf('x') === str.indexOf('xxx'): false;

//OU

function tripleX(str){
  return /^[^x]*xxx/.test(str);
}

//OU

const tripleX = str => { 
  let x = str.indexOf('x')
  return x > -1 && x === str.indexOf('xxx') 
}

//OU

function tripleX(str){
  return str.substr(str.indexOf('x') + 1, 2) === 'xx';
}

//OU

function tripleX(str){
  const i = str.indexOf('x');
  return str.substr(i, 3) === 'xxx';
}

//OU

function tripleX(str){
  let arr = str.split("");
  let position = 0;
  for (var i = 0; i < arr.length; i++) { //SÓ FUNCIONA COM VAR!
    if (arr[i] === "x") {
      position = i;
      break;
    }
  }
  return arr[i+1] === "x" && arr[i+2] === "x" ? true : false;
}



