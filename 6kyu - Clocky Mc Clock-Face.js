// Clocky Mc Clock-Face

// Story
// Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

// What a bunch of cheapskates!

// Can you do it?

// Kata
// Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

// Examples
// 12:00 = 0 degrees
// 03:00 = 90 degrees
// 06:00 = 180 degrees
// 09:00 = 270 degrees
// 12:00 = 360 degrees
// Notes
// 0 <= angle <= 360

// Solution test cases

// describe("Example Tests", function() {

//   it("ex1", function() {
//     Test.assertEquals(whatTimeIsIt(0), "12:00");
//   });

//   it("ex2", function() {
//     Test.assertEquals(whatTimeIsIt(90), "03:00");
//   });

//   it("ex3", function() {
//     Test.assertEquals(whatTimeIsIt(180), "06:00");
//   });

//   it("ex4", function() {
//     Test.assertEquals(whatTimeIsIt(270), "09:00");
//   });

//   it("ex5", function() {
//     Test.assertEquals(whatTimeIsIt(360), "12:00");
//   });

// });

var whatTimeIsIt = function (angle) {
  let totalMinutes = Math.floor((angle * 12 * 60) / 360);
  let minutes = totalMinutes % 60; // hour hand moves 0.5 degrees each minute
  let hour = (totalMinutes - minutes) / 60; // hour hand moves 30 degrees each hour

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (hour <= 0) {
    hour = 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return hour + ":" + minutes;
};
