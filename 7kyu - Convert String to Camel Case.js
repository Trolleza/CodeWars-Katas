// // // 7kyu - Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// Sample Tests:

// Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
// Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

function capitalize(word) {
  const newWord = word.split("");
  newWord[0] = newWord[0].toUpperCase();
  return newWord.join("");
}
function toCamelCase(str) {
  const newStr = str.split(/[-_]/); //Esse regex é "fácil" porque só precisa separar por - e _
  for (let i = 1; i < newStr.length; i++) {
    // O i é = 1 porque ele não quer mudar o upperCase da primeira PALAVRA!
    //     console.log(capitalize(newStr[i]))
    newStr[i] = capitalize(newStr[i]);
  }
  return newStr.join("");
}

//OU

function toCamelCase(str) {
  var regExp = /[-_]\w/gi; //esse regex acha a primeira letra DEPOIS de "-" ou "_" e o /ig é pra ser GLOBAL/SEMPRE
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

//OU

function toCamelCase(str) {
  const auxStr = str.split("");
  const newStr = [];
  for (let i = 0; i < auxStr.length; i++) {
    if (auxStr[i] === "_" || auxStr[i] === "-") {
      //       console.log(auxStr[i + 1])
      auxStr[i + 1] = auxStr[i + 1].toUpperCase();
    } else {
      newStr.push(auxStr[i]);
    }
  }
  return newStr.join("");
}

//OU

function toCamelCase(str) {
  var strArray;
  if (str.indexOf("-") !== -1) {
    //if delineated by -
    strArray = str.split("-");
  } else {
    strArray = str.split("_"); //if delineated by _
  }
  var camelCase = strArray[0]; //keeps first word value as is
  for (var i = 1; i < strArray.length; i++) {
    var capitalized =
      strArray[i].substr(0, 1).toUpperCase() + strArray[i].slice(1);
    camelCase += capitalized;
  }
  return camelCase;
}

//OU

function toCamelCase(str) {
  let type;
  if (str.includes("-")) {
    type = "-";
  }
  if (str.includes("_")) {
    type = "_";
  }
  const newStr = str
    .split([type])
    .map((el, i) => (i > 0 ? el[0].toUpperCase() + el.slice(1) : el))
    .join("");
  return newStr;
}
