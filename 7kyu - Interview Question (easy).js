//7kyu - Interview Question (easy)

// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"

// Sample Tests:
// assert.equal(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
// assert.equal(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
// assert.equal(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");

function getStrings(city) {
  const cArr = city.toLowerCase().replace(/\s/g, "").split("");
  return [...new Set(cArr)]
    .map((letter) => {
      const count = cArr.filter((cletter) => cletter === letter).length;
      return `${letter}:${"*".repeat(count)}`;
    })
    .join(",");
}

//OU

const getStrings = (city, obj = {}) => {
  city
    .toLowerCase()
    .split("")
    .forEach((i) => (obj[i] ? (obj[i] += "*") : (obj[i] = "*")));

  return Object.entries(obj)
    .filter((el) => el[0] !== " ")
    .map((el) => el.join(":"))
    .join(",");
};

//OU

function getStrings(city) {
  return city
    .toLowerCase()
    .replace(/\s+/g, "")
    .split("")
    .reduce((acc, e, i, arr) => {
      if (arr.indexOf(e) == i)
        return [
          ...acc,
          `${e}:${"*".repeat(arr.filter((it) => it == e).length)}`,
        ];
      return acc;
    }, [])
    .join(",");
}

//OU

function getStrings(city) {
  let obj = {};
  let arr = city.toLowerCase().split(" ").join("").split("");
  arr.forEach((el) => {
    if (!obj[el]) {
      obj[el] = "*";
    } else {
      obj[el] += "*";
    }
  });
  let str = JSON.stringify(obj);
  arr = str.split("");
  arr.pop();
  arr.shift();
  str = arr.join("").split('"').join("");

  return str;
}
