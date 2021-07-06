// 7kyu - I'm already Tracer

// Overwatch is a team-based online First Person Shooter. Teams are made up of 6 unique heroes. No team can have 2 of the same hero. e.g. You can't play Tracer if I'm already Tracer.

// Heroes belong to 1 of 3 categories:

// Tank
// Tank heroes soak up damage, create space for your team, and break apart fortified positions, like closely-grouped enemies and narrow choke-points. If you’re a tank, you lead the charge.
// Damage
// Damage heroes are responsible for seeking out, engaging, and defeating the enemy using their varied tools and abilities. Playing a damage hero means it is your duty to secure kills.
// Support
// Support heroes empower their allies by healing them, boosting their damage, and providing vital utility. As support, you’re the backbone of your team’s survival.
// https://overwatch.gamepedia.com/Template:Heroes

// Challenge:
// teamComp()
// Your goal is to write a function that will tell you your team "comp" (composition, i.e. balance of hero categories).

// Input:
// Array of hero names. Example:

// ['Reinhardt', 'Torbjörn', 'Mei', 'Pharah', 'Ana', 'Brigitte']
// Output:
// Array showing # of counts for each hero category. (Team Composition) Example:

// [1, 3, 2]  // [(tank), (damage), (support)]
// Helpers
// Feel free to use TANK, DAMAGE, and SUPPORT - preloaded arrays of hero names in alphabetical order. Examples:

// TANK[0]     // D.Va
// DAMAGE[1]   // Bastion
// SUPPORT[2]  // Lúcio
// Invalid Team Composition
// In the case of an invalid team comp:

// Fewer or greater than 6 heroes
// A hero appears more than once on the team
// ...

// throw new Error('GG');

function teamComp(heroes) {
  let arr = [];
  if (heroes.length !== 6 || Array.from(new Set(heroes)).length !== 6)
    throw "GG";
  else
    arr.push(
      heroes.filter((x) => TANK.includes(x)).length,
      heroes.filter((x) => DAMAGE.includes(x)).length,
      heroes.filter((x) => SUPPORT.includes(x)).length
    );
  return arr;
}

//OU

function teamComp(heroes) {
  if (heroes.length != 6 || new Set(heroes).size != heroes.length) throw "GG";
  return [TANK, DAMAGE, SUPPORT].map(
    (arr) => arr.filter((h) => heroes.indexOf(h) >= 0).length
  );
}

//OU

const teamComp = (h) =>
  h.length == 6 && new Set(h).size == 6
    ? h.reduce(
        (a, e) => [
          a[0] + TANK.some((x) => x == e),
          a[1] + DAMAGE.some((x) => x == e),
          a[2] + SUPPORT.some((x) => x == e),
        ],
        [0, 0, 0]
      )
    : "GG";

//OU

const tanks = [
  "D.Va",
  "Orisa",
  "Reinhardt",
  "Roadhog",
  "Winston",
  "Wrecking Ball",
  "Zarya",
];
const supports = [
  "Ana",
  "Baptiste",
  "Brigitte",
  "Lúcio",
  "Mercy",
  "Moira",
  "Zenyatta",
];

function teamComp(heroes) {
  if (heroes.length !== 6 || heroes.some((e, i) => heroes.lastIndexOf(e) !== i))
    throw "GG";
  const team = [0, 0, 0];
  heroes.forEach((e) => {
    switch (true) {
      case tanks.includes(e):
        team[0]++;
        break;
      case supports.includes(e):
        team[2]++;
        break;
      default:
        team[1]++;
    }
  });
  return team;
}
