// 7kyu - Figure Out the Notes

// You are taking a music class and you need to know what notes are on every fret of the guitar. There are six strings on the guitar and 18 frets. Given the name of the string as a string"E", "A", "D", "G", "B" or "e", as well the fret in integer format (open note is 0), return the note played.

// We are going to use a music scale with only sharps and regular notes, so the 12 notes to know are: A, A#, B, C, C#, D, D#, E, F, F#, G, and G# (notice that B# and E# do not exist).

// Moving up one fret moves one note up the scale, so the open note (0) on E is E; the 1st fret note is F, and the second fret note is F#; etc. You can find a picture of this here:

// "e", 0   -->  "E"
// "D", 5   -->  "G"
// "E", 18  -->  "A#"

// Sample Tests:
// Test.assertEquals(whatNote("e", 0), "E")
// Test.assertEquals(whatNote("D", 5), "G")
// Test.assertEquals(whatNote("E", 18), "A#")
// Test.assertEquals(whatNote("A", 1), "A#")
// Test.assertEquals(whatNote("B", 8), "G")

const whatNote = (string, fret) => {
  const arr = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  let n = arr.indexOf(string.toUpperCase()) + fret;
  return n >= 24 ? arr[n - 24] : n >= 12 ? arr[n - 12] : arr[n];
};

//OU

const whatNote = (string, fret) => {
  const data = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];
  return data[(data.indexOf(string.toUpperCase()) + fret) % 12];
};

//OU

const whatNote = (string, fret) => {
  let order = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let startIdx = order.indexOf(string.toUpperCase());
  let endIdx = (startIdx + fret) % 12;
  return order[endIdx];
};

//OU

const whatNote = (string, fret) => {
  let arr = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
  ];
  if (string == "E" || string == "e") {
    return arr[(fret % 12) + 7];
  }
  if (string == "A") {
    return arr[fret];
  }
  if (string == "D") {
    return arr[(fret % 12) + 5];
  }
  if (string == "B") {
    return arr[(fret % 12) + 2];
  }
  if (string == "G") {
    return arr[(fret % 12) + 10];
  }
};
