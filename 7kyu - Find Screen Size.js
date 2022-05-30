// 7kyu - Find Screen Size

// Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?
// The Challenge

// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

// Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.

// Sample Tests:
// describe("test4:3", function() {
//   it("should return 1024x768", function(){
//       Test.assertEquals(findScreenHeight(1024,"4:3"), "1024x768");
//   });
// });
// describe("test16:9", function() {
//   it("should return 1280x720", function(){
//       Test.assertEquals(findScreenHeight(1280,"16:9"), "1280x720");
//   });
// });
// describe("test32:9", function() {
//   it("should return 3840x1080", function(){
//       Test.assertEquals(findScreenHeight(3840,"32:9"), "3840x1080");
//   });
// });

function findScreenHeight(width, ratio) {
  let res = ratio.split(":");
  return width + "x" + (width / res[0]) * res[1];
}

//OU

function findScreenHeight(width, ratio) {
  const [widthRatio, heightRatio] = ratio.split(":");
  const height = (width / widthRatio) * heightRatio;
  return width + "x" + height;
}

//OU

function findScreenHeight(width, ratio) {
  const [x, y] = ratio.split(":");
  return `${width}x${(width / x) * y}`;
}

//OU

function findScreenHeight(width, ratio) {
  const ind = ratio.split(":")[0] / ratio.split(":")[1];
  return `${width}x${Math.ceil(width / ind)}`;
}

//OU

function findScreenHeight(width, ratio) {
  var arr = ratio.split(":");
  return width + "x" + (width / arr[0]) * arr[1];
}
