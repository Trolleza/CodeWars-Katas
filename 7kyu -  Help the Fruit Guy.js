// 7kyu -  Help the Fruit Guy

// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

// Sample Tests:
// Test.assertSimilar(removeRotten(["apple","banana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"])
// Test.assertSimilar(removeRotten([]), [])

function removeRotten(arr) {
  return arr ? arr.map((x) => x.replace("rotten", "").toLowerCase()) : [];
}

//OU

function removeRotten(bagOfFruits) {
  if (!bagOfFruits || !bagOfFruits.length) {
    return [];
  } else {
    return bagOfFruits.map((e) => e.replace(/^rotten/g, "").toLowerCase());
  }
}

//OU

function removeRotten(bagOfFruits) {
  const toMap = bagOfFruits || [];
  return toMap.map((fruit) => fruit.replace("rotten", "").toLowerCase());
}

//OU

const removeRotten = (bagOfFruits) => (
  (sub = {
    rottenBlueberry: "blueberry",
    rottenBanana: "banana",
    rottenApple: "apple",
    rottenKiwi: "kiwi",
    rottenMelon: "melon",
    rottenOrange: "orange",
    rottenPineapple: "pineapple",
    rottenStrawberry: "strawberry",
    rottenTomato: "tomato",
  }),
  bagOfFruits == null ? [] : bagOfFruits.map((x) => (sub[x] ? sub[x] : x))
);

//OU

function removeRotten(bagOfFruits) {
  if (!bagOfFruits) {
    return [];
  } else {
    let result = bagOfFruits.map((a) => {
      if (a.includes("rotten")) {
        return a.substr(6).toLowerCase();
      } else {
        return a;
      }
    });
    return result;
  }
}

//OU

function removeRotten(bagOfFruits) {
  if (!bagOfFruits) {
    return [];
  } else {
    let result = [];
    for (let i = 0; i < bagOfFruits.length; i++) {
      if (bagOfFruits[i].includes("rotten")) {
        result.push(bagOfFruits[i].substr(6).toLowerCase());
      } else {
        result.push(bagOfFruits[i]);
      }
    }
    return result;
  }
}

//OU

function removeRotten(bagOfFruits) {
  if (bagOfFruits == null) {
    return [];
  }
  const good = [];
  for (const fruit of bagOfFruits) {
    if (fruit.includes("rotten")) {
      good.push(fruit.replace(/rotten/g, "").toLowerCase());
      continue;
    }
    good.push(fruit);
  }
  return good;
}

//OU

const removeRotten = (bagOfFruits) => {
  if (!bagOfFruits || !bagOfFruits.length) return [];
  for (let i = 0; i < bagOfFruits.length; i++) {
    if (bagOfFruits[i].includes("rotten")) {
      bagOfFruits[i] = bagOfFruits[i].slice(6).toLowerCase();
    }
  }
  return bagOfFruits;
};

//OU

function removeRotten(bagOfFruits) {
  let result = [];

  if (bagOfFruits) {
    for (let fruit of bagOfFruits) {
      fruit.includes("rotten")
        ? result.push(fruit.slice(6).toLowerCase())
        : result.push(fruit);
    }
  }
  return result.length ? result : [];
}

//OU

const removeRotten = (a) => {
  if (a == null) {
    return [];
  }
  for (i = 0; i < a.length; i++) {
    if (a[i].match("rotten")) {
      a[i] = a[i].replace("rotten", "");
      a[i] = a[i].toLowerCase();
    }
  }
  return a;
};

//OU

function removeRotten(bagOfFruits) {
  let arr = [];
  if (bagOfFruits == undefined) return [];
  for (let i = 0; i < bagOfFruits.length; i++) {
    if (bagOfFruits[i] == "rottenApple") arr.push("apple");
    else if (bagOfFruits[i] == "rottenBanana") arr.push("banana");
    else if (bagOfFruits[i] == "rottenPineapple") arr.push("pineapple");
    else if (bagOfFruits[i] == "rottenKiwi") arr.push("kiwi");
    else if (bagOfFruits[i] == "rottenBlueberry") arr.push("blueberry");
    else if (bagOfFruits[i] == "rottenMelon") arr.push("melon");
    else if (bagOfFruits[i] == "rottenTomato") arr.push("tomato");
    else arr.push(bagOfFruits[i]);
  }
  return arr;
}
