// 7kyu - Cat and Mouse - Easy Version

// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

// Sample Tests:

// describe("Example tests",_=>{
//   Test.assertEquals(catMouse('C....m'), "Escaped!");
//   Test.assertEquals(catMouse('C..m'), "Caught!");
//   Test.assertEquals(catMouse('C.....m'), "Escaped!");
//   });

function catMouse(x) {
  return x.length <= 5 ? "Caught!" : "Escaped!";
}

//OU

function catMouse(x) {
  return x.includes("....") ? "Escaped!" : "Caught!";
}

//OU

function catMouse(x) {
  let count = 0;
  for (let i in x) {
    if (x[i] === ".") {
      count++;
    }
  }

  if (count <= 3) {
    return "Caught!";
  } else {
    return "Escaped!";
  }
}

//OU

function catMouse(x) {
  return x.split("").filter((f) => {
    return f === ".";
  }).length > 3
    ? "Escaped!"
    : "Caught!";
}

//OU

function catMouse(x) {
  if (x.length - 2 <= 3) return "Caught!";
  // -2 pra tirar o C e o M da string, e deixar só os pontinhos do meio.
  else return "Escaped!";
}

//OU

let catMouse = (x) => (x[5] ? "Escaped!" : "Caught!");
