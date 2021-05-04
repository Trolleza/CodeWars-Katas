// 6kyu - Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?

// You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];

// Sample Tests:
// describe("Tests", () => {
//   it("test", () => {
// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
// ];

// var list2 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
// ];

// Test.assertEquals(allContinents(list1), true);
// Test.assertEquals(allContinents(list2), false);
//   });
// });

function allContinents(list) {
  let continents = [];
  for (let i = 0; i < list.length; i++) {
    if (continents.indexOf(list[i].continent) == -1) {
      continents.push(list[i].continent);
    }
  }
  if (continents.length == 5) {
    return true;
  } else {
    return false;
  }
}

//OU

function allContinents(list) {
  let countries = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  for (let i = 0; i < list.length; i++) {
    if (countries.includes(list[i].continent)) {
      countries = countries.filter((country) => list[i].continent !== country);
    }
  }
  return countries.length === 0;
}

//OU

function allContinents(list) {
  const auxArr = list.map((developer) => developer.continent);
  return [...new Set(auxArr)].length === 5;
}

//OU

function allContinents(list) {
  const continents = list.map((x) => x.continent);
  return continents.includes(
    "Africa" && "Americas" && "Asia" && "Europe" && "Oceania"
  );
}

//OU

function allContinents(list) {
  return new Set(list.map((l) => l.continent)).size === 5;
}

//OU

function allContinents(list) {
  //   const auxArr = list.map(c => c.continent)
  //   const unified = auxArr.filter((c,i) => auxArr.indexOf(c) === i) MESMA COISA ABAIXO:
  return (
    list.map((c) => c.continent).filter((c, i, a) => a.indexOf(c) === i)
      .length === 5
  );
}

//OU

function allContinents(list) {
  let aux = [];
  for (let dev of list) {
    // array
    for (let key in dev) {
      // cada objeto
      if (key === "continent" && aux.indexOf(dev[key]) === -1) {
        aux.push(dev[key]);
      }
    }
  }
  return aux.length === 5;
}

//OU

with (require("ramda"))
  var allContinents = pipe(map(prop`continent`), uniq, length, equals(5)); //Pode estudar ramda que é sucesso.
