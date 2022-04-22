// 7kyu -  ⚠️Fusion Chamber Shutdown⚠️

// A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber lost its power and the elements in it started precipitating
// Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below

//1. Hydrogen reacts with Oxygen   = H2O
// 2. Carbon   reacts with Oxygen   = CO2
// 3. Carbon   reacts with Hydrogen = CH4

//FOR EXAMPLE:
//(C,H,O) = (45,11,100)
// return no. of water, carbon dioxide and methane molecules
// Output should be like:
// (5,45,0)

// it("burner(45, 11, 100)", () => assert.deepStrictEqual(burner(45, 11, 100), [5, 45, 0]));
// it("burner(354, 1023230, 0)", () => assert.deepStrictEqual(burner(354, 1023230, 0), [0, 0, 354]));
// it("burner(939, 3, 694)", () => assert.deepStrictEqual(burner(939, 3, 694), [1, 346, 0]));
// it("burner(215, 41, 82100)", () => assert.deepStrictEqual(burner(215, 41, 82100), [20, 215, 0]));
// it("burner(113, 0, 52)", () => assert.deepStrictEqual(burner(113, 0, 52), [0, 26, 0]));

function burner(c, h, o) {
  let water = Math.floor(Math.min(h / 2, o));
  o = o - water;
  h = h - water * 2;
  let co2 = Math.floor(Math.min(c, o / 2)),
    methane = Math.floor(Math.min(c, h / 4));
  return [water, co2, methane];
}

//OU

function burner(c, h, o) {
  const water = Math.min(~~(h / 2), o);
  const carbon = Math.min(~~((o - water) / 2), c);
  const methane = Math.min(~~((h - water * 2) / 4), c - carbon);
  return [water, carbon, methane];
}

//OU

function burner(c, h, o) {
  const h2o = Math.min(o, Math.floor(h / 2));
  const co2 = Math.min(c, Math.floor((o - h2o) / 2));
  const ch4 = Math.min(c - co2, Math.floor((h - h2o * 2) / 4));

  return [h2o, co2, ch4];
}
