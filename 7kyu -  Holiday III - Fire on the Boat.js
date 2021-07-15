// 7kyu -  Holiday III - Fire on the Boat

// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

// Sample Tests:
// Test.assertEquals(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"), "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
// Test.assertEquals(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~");
// Test.assertEquals(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"), "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain");

let fireFight = (s) =>
  s
    .split(" ")
    .map((a) => a.replace("Fire", "~~"))
    .join(" ");

//OU

const fireFight = (s) => s.replace(/Fire/g, `~~`);

//OU

function fireFight(s) {
  while (s.includes("Fire")) {
    s = s.replace("Fire", "~~");
  }
  return s;
}

//OU

function fireFight(s) {
  let str = s.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "Fire") {
      str[i] = "~~";
    }
  }
  return str.join(" ");
}

//OU

function fireFight(s) {
  return s
    .split(" ")
    .map(function (elm) {
      if (elm === "Fire") {
        return (elm = "~~");
      } else {
        return elm;
      }
    })
    .join(" ");
}
