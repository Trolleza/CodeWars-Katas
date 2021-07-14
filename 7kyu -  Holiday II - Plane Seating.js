// 7kyu -  Holiday II - Plane Seating

// Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

// To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

// the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

// Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

// Given a seat number, your task is to return the seat location in the following format:

// '2B' would return 'Front-Left'.

// If the number is over 60, or the letter is not valid, return 'No Seat!!'.

// Sample Tests:
// Test.assertEquals(planeSeat('2B'), 'Front-Left');
// Test.assertEquals(planeSeat('20B'), 'Front-Left');
// Test.assertEquals(planeSeat('58I'), 'No Seat!!');

function planeSeat(a) {
  let number = parseInt(a);
  let letter = a[a.length - 1];
  if (number > 60 || letter == "I" || letter == "J") return "No Seat!!";
  return `${number > 20 ? (number > 40 ? "Back-" : "Middle-") : "Front-"}${
    letter > "C" ? (letter > "F" ? "Right" : "Middle") : "Left"
  }`;
}

//OU

function planeSeat(a) {
  var num = parseInt(a),
    letter = a[a.length - 1],
    pos = {
      A: "Left",
      B: "Left",
      C: "Left",
      D: "Middle",
      E: "Middle",
      F: "Middle",
      G: "Right",
      H: "Right",
      K: "Right",
    };
  if (pos[letter] == null) return "No Seat!!";
  return num <= 20
    ? "Front-" + pos[letter]
    : num <= 40
    ? "Middle-" + pos[letter]
    : num <= 60
    ? "Back-" + pos[letter]
    : "No Seat!!";
}

//OU

function planeSeat(a) {
  const num = parseInt(a);
  const letter = a.slice(-1);
  let p1, p2;

  if (num <= 20) p1 = "Front-";
  if (num > 20) p1 = "Middle-";
  if (num > 40 && num <= 60) p1 = "Back-";

  if ("ABC".includes(letter)) p2 = "Left";
  if ("DEF".includes(letter)) p2 = "Middle";
  if ("GHK".includes(letter)) p2 = "Right";

  return num > 60 || !"ABCDEFGHK".includes(letter) ? "No Seat!!" : p1 + p2;
}

//OU

function planeSeat(a) {
  const noSeat = (a) =>
    parseInt(a) > 60 || !"ABCDEFGHK".includes(a.slice(-1))
      ? "No Seat!!"
      : false;

  return (
    noSeat(a) ||
    ["Front", "Middle", "Back"][~~((parseInt(a) - 1) / 20)] +
      "-" +
      ["Left", "Middle", "Right"]["ADGBEHCFK".indexOf(a.slice(-1)) % 3]
  );
}

//OU

const planeSeat = (function () {
  const columns = {
    A: "Left",
    B: "Left",
    C: "Left",
    D: "Middle",
    E: "Middle",
    F: "Middle",
    G: "Right",
    H: "Right",
    K: "Right",
  };

  const sections = ["Front", "Middle", "Back"];

  return (a) => {
    let row = parseInt(a) - 1;
    let col = a[a.length - 1];
    console.log(row);

    if (row >= 60 || !columns[col]) return "No Seat!!";

    return `${sections[Math.floor(row / 20)]}-${columns[col]}`;
  };
})();

//OU

function planeSeat(a) {
  row = parseInt(a.slice(0, -1));
  if (row > 60) return "No Seat!!";

  cluster = a.slice(-1);
  if ("ABCDEFGHK".indexOf(cluster) < 0) return "No Seat!!";

  r = "";

  if (row < 21) {
    r = "Front-";
  } else if (row < 41) {
    r = "Middle-";
  } else {
    r = "Back-";
  }

  if ("ABC".indexOf(cluster) >= 0) {
    r += "Left";
  } else if ("DEF".indexOf(cluster) >= 0) {
    r += "Middle";
  } else {
    r += "Right";
  }
  return r;
}
