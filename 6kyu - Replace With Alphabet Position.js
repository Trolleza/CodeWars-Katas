// 6kyu - Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");


function alphabetPosition(text) {
  return text.split('') //separa os números.
        .map(char => char.toLowerCase().charCodeAt(0) - 96) //Vai na lista dos ACII para descobrir quantos números precisa diminuir antes das letras minúsculas.
        .filter(char => char > 0 && char < 27) //depois de diminuir, o "a" virou o 1, então você só quer do 1 até o 26 que é o "z".
        .join(' ') //transforma em string, e junta separando os números.
}

//OU

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return text
      .split("")
      .map((x) => alphabet.indexOf(x.toLowerCase()) + 1) //a questão quer que o a seja 1, então precisa somar +1, e o INDEXOF PEGA A POSIÇÃO DO INDEX (número)!
      .filter(x => x > 0)
      .join(" ");
}

