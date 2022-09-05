// 7kyu - Defeat the Elemental Titans

// Description:

// You have to take on the elemental titans, but you can only launch one elemental attack to take it out so you have to make it count! Elements can be strong, weak or have no additional effect to your attacks.

// Elements that are strong against the titan will multiply your attack by 1.5, however elements that are weak against the titan will halve the damage done. Elemental attacks against a titan of the same type will be weakened. The following outlines the weakness and strengths of the four elements: "Fire", "Water", "Thunder" and "Earth".

// "Fire" : strong against "Earth " and weak against "Water" and "Fire".

// "Earth" : strong against "Thunder " and weak against "Fire" and "Earth".

// "Water" : strong against "Fire " and weak against "Thunder" and "Water".

// "Thunder" : strong against "Water " and weak against "Earth" and "Thunder".

// Write a program to return the damage done to the titan (this should be zero or below if the titan is defeated. Then you must return an action. If you defeat the titan (damage is zero or below), then you should "Attack". If your attack wont defeat the titan there is no shame in running and you should "Run!"

// You will be given your attack power "att" and the titan's defense "def". The damage will be the difference between defense of the titan and the final attack power. You will be supplied with your element (yourElement) and the titan's element (theirElement). Return the damage done and the action as an array in the form [damage,"Action"], where the action is either "Attack" or "Run!". Good luck!

let titanAttack = (function () {
  let str = {
    Fire: "Earth",
    Earth: "Thunder",
    Water: "Fire",
    Thunder: "Water",
  };
  let wk = { Fire: "Water", Earth: "Fire", Water: "Thunder", Thunder: "Earth" };

  return function (att, def, yl, tl) {
    let v =
      def - att * (str[yl] === tl ? 1.5 : yl === tl || wk[yl] === tl ? 0.5 : 1);
    return v > 0 ? [v, "Run!"] : [v, "Attack"];
  };
})();

//OU

function titanAttack(a, d, y, t) {
  const m = {
    Fire: { Earth: 1.5, Water: 0.5, Fire: 0.5 },
    Earth: { Thunder: 1.5, Fire: 0.5, Earth: 0.5 },
    Water: { Fire: 1.5, Thunder: 0.5, Water: 0.5 },
    Thunder: { Water: 1.5, Earth: 0.5, Thunder: 0.5 },
  };
  let r = d - (m[y][t] || 1) * a;
  return [r, r > 0 ? "Run!" : "Attack"];
}

//OU

function titanAttack(
  yourAttackPower,
  titanDefensePower,
  yourElement,
  titanElement
) {
  const ELEMENTS = ["Fire", "Earth", "Thunder", "Water"];
  let damage =
    titanDefensePower -
    yourAttackPower *
      [0.5, 0.5, 1, 1.5][
        (ELEMENTS.indexOf(yourElement) -
          ELEMENTS.indexOf(titanElement) +
          ELEMENTS.length) %
          ELEMENTS.length
      ];
  return [damage, damage <= 0 ? "Attack" : "Run!"];
}

//OU

function titanAttack(att, def, yourElement, theirElement) {
  const strength = {
    Fire: "Earth",
    Earth: "Thunder",
    Water: "Fire",
    Thunder: "Water",
  };

  let attack = att;

  if (strength[yourElement] === theirElement) attack *= 1.5;
  else if ([theirElement, strength[theirElement]].includes(yourElement))
    attack *= 0.5;

  return [def - attack, def > attack ? "Run!" : "Attack"];
}

//OU

function titanAttack(att, def, [me], [you]) {
  let strong = ["FE", "ET", "TW", "WF"];
  let weak = ["FW", "EF", "TE", "WT"];
  let power = att;
  if (me == you || weak.includes(me + you)) power *= 0.5;
  else if (strong.includes(me + you)) power *= 1.5;
  return [def - power, def <= power ? "Attack" : "Run!"];
}

//OU

const c = { Fire: "Earth", Earth: "Thunder", Water: "Fire", Thunder: "Water" };
const d = { Fire: "Water", Earth: "Fire", Water: "Thunder", Thunder: "Earth" };

function titanAttack(att, def, ye, te) {
  var v =
    def - att * (c[ye] === te ? 1.5 : ye === te || d[ye] === te ? 0.5 : 1);
  return [v, v > 0 ? "Run!" : "Attack"];
}

//OU

function titanAttack(att, def, X, Y) {
  let A = { Fire: "Earth", Earth: "Thunder", Water: "Fire", Thunder: "Water" };
  let B = { Fire: "Water", Earth: "Fire", Water: "Thunder", Thunder: "Earth" };
  let D = def - att * (A[X] == Y ? 1.5 : X == Y || B[X] == Y ? 0.5 : 1);
  return [D, D > 0 ? "Run!" : "Attack"];
}

//OU

function titanAttack(att, def, yourElement, theirElement) {
  const result1 =
    attackerIsStrongAgainstTitan(yourElement, theirElement) === true
      ? def - 1.5 * att
      : attackerIsStrongAgainstTitan(yourElement, theirElement) === false
      ? def - 0.5 * att
      : def - att;
  const result2 = result1 <= 0 ? "Attack" : "Run!";
  const result = [result1, result2];
  return result;
}
function attackerIsStrongAgainstTitan(attacker, defender) {
  if (attacker === "Fire") {
    if (defender === "Earth") {
      return true;
    } else if (defender === "Water" || defender === "Fire") {
      return false;
    } else {
      return undefined;
    }
  } else if (attacker === "Earth") {
    if (defender === "Thunder") {
      return true;
    } else if (defender === "Fire" || defender === "Earth") {
      return false;
    } else {
      return undefined;
    }
  } else if (attacker === "Water") {
    if (defender === "Fire") {
      return true;
    } else if (defender === "Thunder" || defender === "Water") {
      return false;
    } else {
      return undefined;
    }
  } else if (attacker === "Thunder") {
    if (defender === "Water") {
      return true;
    } else if (defender === "Earth" || defender === "Thunder") {
      return false;
    } else {
      return undefined;
    }
  }
}
