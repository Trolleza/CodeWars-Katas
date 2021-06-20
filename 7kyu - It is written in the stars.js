//7kyu - It is written in the stars

// Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
// Task:
// Your job for today is to finish the star_sign function by finding the astrological sign, given the birth details as a Date object.
// Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

// Aquarius ------ 21 January - 19 February
// Pisces --------- 20 February - 20 March
// Aries ---------- 21 March - 20 April
// Taurus -------- 21 April - 21 May
// Gemini -------- 22 May - 21 June
// Cancer -------- 22 June - 22 July
// Leo ------------- 23 July - 23 August
// Virgo ----------- 24 August - 23 September
// Libra ----------- 24 September - 23 October
// Scorpio -------- 24 October - 22 November
// Sagittarius ---- 23 November - 21 December
// Capricorn ----- 22 December - 20 January

// Test info: 100 random tests (dates range from January 1st 1940 until now)

// Sample Tests:
// describe("Testing starSign", function() {
//   it("Basic tests", function() {
//     Test.assertEquals(starSign(new Date(1970, 5, 5)), 'Gemini');
//     Test.assertEquals(starSign(new Date(2000, 1, 15)), 'Aquarius');
//     Test.assertEquals(starSign(new Date(1987, 7, 23)), 'Leo');

function starSign(date) {
  let x = date.getMonth() * 100 + date.getDate();

  if (x <= 20) return "Capricorn";
  if (x <= 119) return "Aquarius";
  if (x <= 220) return "Pisces";
  if (x <= 320) return "Aries";
  if (x <= 421) return "Taurus";
  if (x <= 521) return "Gemini";
  if (x <= 622) return "Cancer";
  if (x <= 723) return "Leo";
  if (x <= 823) return "Virgo";
  if (x <= 923) return "Libra";
  if (x <= 1022) return "Scorpio";
  if (x <= 1121) return "Sagittarius";
  else return "Capricorn";
}

//OU

function starSign(date) {
  let d = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
  let s = [
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
  ];

  let m = date.getMonth(); // 0-11
  let da = date.getDate(); //1-31

  if (m == 0 && da <= 20) {
    m = 11;
  } else if (da < d[m]) {
    m--;
  }
  return s[m];
}

//OU

const starSign = (x) =>
  [
    [0, 21, "Capricorn"],
    [1, 20, "Aquarius"],
    [2, 21, "Pisces"],
    [3, 21, "Aries"],
    [4, 22, "Taurus"],
    [5, 22, "Gemini"],
    [6, 23, "Cancer"],
    [7, 24, "Leo"],
    [8, 24, "Virgo"],
    [9, 24, "Libra"],
    [10, 23, "Scorpio"],
    [11, 22, "Sagittarius"],
    [12, 21, "Capricorn"], // January next year
  ].find(([m, d]) => new Date(x.getFullYear(), m, d) > x)[2];

//OU

function starSign(date) {
  const sign = {
      0: [21, "Capricorn", "Aquarius"],
      1: [20, "Aquarius", "Pisces"],
      2: [21, "Pisces", "Aries"],
      3: [21, "Aries", "Taurus"],
      4: [22, "Taurus", "Gemini"],
      5: [22, "Gemini", "Cancer"],
      6: [23, "Cancer", "Leo"],
      7: [24, "Leo", "Virgo"],
      8: [24, "Virgo", "Libra"],
      9: [24, "Libra", "Scorpio"],
      10: [24, "Scorpio", "Sagittarius"],
      11: [21, "Sagittarius", "Capricorn"],
    },
    day = date.getDate(),
    month = date.getMonth();

  return day < sign[month][0] ? sign[month][1] : sign[month][2];
}
