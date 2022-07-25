// 7kyu - Easy Time Convert

// Description:

// This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).

// If the input is 0 or negative value, then you should return "00:00"

// Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division. For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.
// Example

// If the input is 78, then you should return "01:18", because 78 minutes converts to 1 hour and 18 minutes.

// Good luck! :D

function timeConvert(num) {
  if (num <= 0) return "00:00";
  let min = ~~(num / 60);
  //~~ = Math.floor(num / 60)
  let sec = num % 60;
  return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
}

//OU

function timeConvert(num) {
  if (num < 0) return "00:00";
  let hours = ("" + Math.floor(num / 60)).padStart(2, "0");
  let minutes = ("" + (num % 60)).padStart(2, "0");
  return `${hours}:${minutes}`;
}

//OU

function timeConvert(num) {
  var h = Math.floor(num / 60);
  var m = num % 60;
  var ans = "";
  if (h < 10) ans += "0";
  ans += h + ":";
  if (m < 10) ans += "0";
  ans += m;
  return num >= 0 ? ans : "00:00";
}

//OU

const pad = (time) => String(time).padStart(2, "0");

function timeConvert(minutes) {
  if (minutes < 0) return "00:00";

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${pad(hours)}:${pad(remainingMinutes)}`;
}

//OU

function timeConvert(num) {
  if (num < 1) return "00:00";

  return [(num / 60) | 0, num % 60]
    .map((part) => `${part}`.padStart(2, 0))
    .join(":");
}
