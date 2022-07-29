// 7kyu - Drone Fly-By

// Description:

// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.

// Sample Tests:
// assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
// assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx');
// assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx');

function flyBy(lamps, drone) {
  return drone.length > lamps.length
    ? "o".repeat(lamps.length)
    : lamps.replace("x".repeat(drone.length), "o".repeat(drone.length));
}

//OU

function flyBy(lamps, drone) {
  return [...lamps].fill(`o`, 0, drone.length).join(``);
}

//OU

function flyBy(lamps, drone) {
  if (drone.length > lamps.length) return "o".repeat(lamps.length);
  return lamps.replace("x".repeat(drone.length), "o".repeat(drone.length));
}

//OU

function flyBy(lamps, drone) {
  return lamps
    .split("")
    .map((item, index, arr) => (index < drone.length ? "o" : item))
    .join("");
}

//OU

const flyBy = (lamps, drone) =>
  "o".repeat(Math.min(lamps.length, drone.length)) +
  "x".repeat(Math.max(0, lamps.length - drone.length));
