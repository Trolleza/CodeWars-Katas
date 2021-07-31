// 7kyu -  7kyu - Guarding the AlgoLandia

// In a far away country called AlgoLandia, there are N islands numbered 1 to N. Each island is denoted by k[i]. King Algolas, king of AlgoLandia, built N - 1 bridges in the country. A bridge is built between islands k[i] and k[i+1]. Bridges are two-ways and are expensive to build.

// The problem is that there are gangs who wants to destroy the bridges. In order to protect the bridges, the king wants to assign elite guards to the bridges. A bridge between islands k[i] and k[i+1] is safe when there is an elite guard in island k[i] or k[i+1]. There are already elite guards assigned in some islands.

// Your task now is to determine the minimum number of additional elite guards that needs to be hired to guard all the bridges.

// Note:
// You are given a sequence k with N length. k[i] = true, means that there is an elite guard in that island; k[i] = false means no elite guard. It is guaranteed that AlgoLandia have at least 2 islands.

// Sample Input 1
// k = [true, true, false, true, false]
// Sample Output 1
// 0

// Sample Input 2
// k = [false, false, true, false, false]
// Sample Output 2
// 2

function findNeededGuards(k) {
  let result = 0;
  let missing = 0;
  k.forEach((x, i) => {
    if (x) {
      result += Math.floor(missing / 2);
      missing = 0;
    } else {
      missing++;
    }
  });
  return result + Math.floor(missing / 2);
}

//OU

const findNeededGuards = (k) => {
  let neededGuards = 0;
  for (let index = 0; index < k.length - 1; index++) {
    if (!k[index] && !k[index + 1]) {
      k[index] = true;
      k[index + 1] = true;
      index++;
      neededGuards++;
    }
  }
  return neededGuards;
};

//OU

function findNeededGuards(k) {
  let c = 0;
  for (let i = 0; i < k.length; i++) {
    if (k[i] == 0 && k[i + 1] == 0) {
      c++;
      i++;
    }
  }
  return c;
}

//OU

// function findNeededGuards(k) {
//   let trueN = 0
//   let falseN = 0
//   for(i = 0; i < k.length; i++) {
//     if (k[i] === true) trueN++
//     else falseN++
//   }

//   if (trueN > falseN) return 0
//   else return +((falseN - trueN) / 2).toFixed()
// }
//NÃO PASSOU NO ATTEMPT
