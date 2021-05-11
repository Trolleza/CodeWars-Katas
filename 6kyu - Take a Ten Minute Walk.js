// 6kyu - Take a Ten Minute Walk

// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the
// opportunity to go for a short walk. The city provides its citizens with a Walk
// Generating App on their phones -- everytime you press the button it sends you
// an array of one-letter strings representing directions to walk (eg. ['n', 's',
// 	'w', 'e']). You know it takes you one minute to traverse one city block, so
// create a function that will return true if the walk the app gives you will take
// you exactly ten minutes (you don't want to be early or late!) and will, of
// course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of
// direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty
// array (that's not a walk, that's standing still!).

// Sample Tests:
// describe("Tests", () => {
//   it("test", () => {
// //some test cases for you...
// Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// Test.expect(!isValidWalk(['w']), 'should return false');
// Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

//   });
// });

function isValidWalk(walk) {
  let x = 0;
  y = 0;
  if (walk.length != 10) {
    return false;
  }
  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        y += 1;
        break;
      case "s":
        y -= 1;
        break;
      case "w":
        x += 1;
        break;
      default:
        x -= 1;
        break;
    }
  }
  return x === 0 && y === 0;
}

//OU

function isValidWalk(walk) {
  const north = walk.filter((path) => path == "n").length;
  const south = walk.filter((path) => path == "s").length;
  const west = walk.filter((path) => path == "w").length;
  const east = walk.filter((path) => path == "e").length;
  return walk.length === 10 && north === south && west === east;
}

//OU

function isValidWalk(walk) {
  var sums = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  };

  if (walk.length !== 10) return false;

  for (let i = 0; i < walk.length; i++) {
    sums[walk[i]]++;
  }
  return sums["n"] == sums["s"] && sums["w"] == sums["e"] ? true : false;
}
