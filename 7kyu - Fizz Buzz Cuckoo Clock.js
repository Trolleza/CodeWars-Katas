// 7kyu - Fizz Buzz Cuckoo Clock

// You've always loved both Fizz Buzz katas and cuckoo clocks, and when you walked by a garage sale and saw an ornate cuckoo clock with a missing pendulum, and a "Beyond-Ultimate Raspberry Pi Starter Kit" filled with all sorts of sensors and motors and other components, it's like you were suddenly hit by a beam of light and knew that it was your mission to combine the two to create a computerized Fizz Buzz cuckoo clock!

// You took them home and set up shop on the kitchen table, getting more and more excited as you got everything working together just perfectly. Soon the only task remaining was to write a function to select from the sounds you had recorded depending on what time it was:
// Your plan

//     When a minute is evenly divisible by three, the clock will say the word "Fizz".
//     When a minute is evenly divisible by five, the clock will say the word "Buzz".
//     When a minute is evenly divisible by both, the clock will say "Fizz Buzz", with two exceptions:
//         On the hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo bird will come out and "Cuckoo" between one and twelve times depending on the hour.
//         On the half hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo will come out and "Cuckoo" just once.
//     With minutes that are not evenly divisible by either three or five, at first you had intended to have the clock just say the numbers ala Fizz Buzz, but then you decided at least for version 1.0 to just have the clock make a quiet, subtle "tick" sound for a little more clock nature and a little less noise.

// Your input will be a string containing hour and minute values in 24-hour time, separated by a colon, and with leading zeros. For example, 1:34 pm would be "13:34".

// Your return value will be a string containing the combination of Fizz, Buzz, Cuckoo, and/or tick sounds that the clock needs to make at that time, separated by spaces. Note that although the input is in 24-hour time, cuckoo clocks' cuckoos are in 12-hour time.
// Some examples

// "13:34"       "tick"
// "21:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
// "11:15"       "Fizz Buzz"
// "03:03"       "Fizz"
// "14:30"       "Cuckoo"
// "08:55"       "Buzz"
// "00:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
// "12:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"

// Have fun!

function fizzBuzzCuckooClock(time) {
  let [hour, minute] = time.split(":");
  return minute == 0
    ? "Cuckoo ".repeat(hour % 12 || 12).trim()
    : minute == 30
    ? "Cuckoo"
    : minute % 15 == 0
    ? "Fizz Buzz"
    : minute % 3 == 0
    ? "Fizz"
    : minute % 5 == 0
    ? "Buzz"
    : "tick";
}

//OU

function fizzBuzzCuckooClock(time) {
  time = time.split(":");
  hours = Number(time[0]);
  minutes = Number(time[1]);

  if (minutes === 0) return "Cuckoo ".repeat(((hours - 24) % 12) + 12).trim();
  else if (minutes === 30) return "Cuckoo";
  else if (minutes % 3 === 0 && minutes % 5 === 0) return "Fizz Buzz";
  else if (minutes % 3 === 0) return "Fizz";
  else if (minutes % 5 === 0) return "Buzz";
  return "tick";
}

//OU

function fizzBuzzCuckooClock(time) {
  let [h = convertHour(), m] = time.split(":").map(Number);
  if (m === 0) return "Cuckoo ".repeat(((h - 24) % 12) + 12).trim();
  if (m === 30) return "Cuckoo";
  if (m % 3 === 0 && m % 5 === 0) return "Fizz Buzz";
  if (m % 3 === 0) return "Fizz";
  if (m % 5 === 0) return "Buzz";
  return "tick";
}

//OU

const fizzBuzzCuckooClock = (time) =>
  (([h, m]) =>
    !m
      ? `Cuckoo `.repeat(h % 12 || 12).trim()
      : !(m % 30)
      ? `Cuckoo`
      : !(m % 15)
      ? `Fizz Buzz`
      : !(m % 5)
      ? `Buzz`
      : !(m % 3)
      ? `Fizz`
      : `tick`)(time.split(`:`).map(Number));

//OU

function fizzBuzzCuckooClock(time) {
  let [h, m] = time.split(":").map(Number);
  return m == 0 || m == 30
    ? "Cuckoo ".repeat(m == 30 || h % 12 || 12).trim()
    : ["tick", "Fizz", "Buzz", "Fizz Buzz"][+!(m % 3) + 2 * !(m % 5)];
}
