//7kyu - Leap Years

// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them

// Sample Tests:
// describe('leap year', function() {
//   it('should detect leap years', function() {
//     Test.assertEquals(isLeapYear(1234), false, 'Year 1234');
//     Test.assertEquals(isLeapYear(1984), true, 'Year 1984');
//     Test.assertEquals(isLeapYear(2000), true, 'Year 2000');
//     Test.assertEquals(isLeapYear(2010), false, 'Year 2010');
//     Test.assertEquals(isLeapYear(2013), false, 'Year 2013');
//   });
// });

let isLeapYear = (y) => (y % 100 !== 0 && y % 4 === 0) || y % 400 === 0;

// OU

function isLeapYear(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}

//OU

function isLeapYear(year) {
  if (0 == year % 400) return true;
  if (0 == year % 100) return false;
  if (0 == year % 4) return true;
  return false;
}

//OU

function isLeapYear(year) {
  // TODO
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) return true;
  else return false;
}

//OU

function isLeapYear(year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
