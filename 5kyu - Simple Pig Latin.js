// 5kyu - Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Sample Tests:
// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
// });
// });

function pigIt(str){
  return str.split(' ').map(moveAndAddAy).join(' ')
}

function moveAndAddAy(word) {
  const letterRegex = new RegExp(/[a-z]/i) //testo se faz parte do alfabeto, i = caseSensitive
  if(letterRegex.test(word)){
    const wordArr = word.split('')
    const firstLetter = wordArr.shift() //tira a primeira letra de cada palavra
    return wordArr.join('') + firstLetter + 'ay'
  }
  return word
}

//OU

function pigIt(str){
  return str
    .split(' ')
    .map((word) => word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + 'ay' : word) //o match pois só vai fazer isso se for com as letras de a-z
    .join(' ')
}

//OU

function pigIt(sentence){
  const letterRegex = new RegExp(/\w+/g) //outra forma de regex para o regex acima!
  return sentence
          .split(' ')
          .map(([f, ...rest]) => letterRegex.test(rest) || letterRegex.test(f) ? rest.join('') + f + 'ay' : f)
          .join(' ')
}

