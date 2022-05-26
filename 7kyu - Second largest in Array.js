// 7kyu - Second largest in Array

// Find and return second largest unique number in given Array.

// Array may contain values of any data type. Ignore everything except numbers and strings, which may be converted to numbers.

// If passed value is not an Array or if there is no second largest item in given Array (e.g. [1, 1, 1]) should return undefined.
// Examples:
// secondLargest([1, -2, 3]) = 1;
// secondLargest([5, 5, 4]) = 4;
// secondLargest([2, '3', 4]) = 3;

// Should return:
// 1. Passed value not an Array:
// secondLargest("1 2 3") = undefined;

// 2. There is no second largest:
// secondLargest([2, 2, 2]) = undefined;

// 3. Ignore everything except:
//   * numbers
//   * not-NaN strings:
// secondLargest(['-1', 2, null, false]) = -1;

// Input range:
// Numbers are safe Integers.
// Not-NaN strings represent safe Integers.

// Sample Tests:
// Test.assertEquals(secondLargest([-32,11,43,55,0,11]), 43);
// Test.assertEquals(secondLargest(null), undefined);
// Test.assertEquals(secondLargest([5,5,5,5,5,5]), undefined);
// Test.assertEquals(secondLargest([0, 1, '2', 3]), 2);
// Test.assertEquals(secondLargest(['-1', 2, null, false]), -1);

function secondLargest(x) {
  // x must be an array.
  if (!Array.isArray(x)) return undefined;
  // Remove not numbers and empty strings
  x = x
    .filter((x) => "number" == typeof x || "string" == typeof x)
    .map((x) => Number(x))
    .filter((x) => x || 0 === x);
  // NaN != NaN // true.
  // Remove dublicates from x.
  x = [...new Set(x)];
  // Return undefined if size less than 2.
  if (2 > x.length) return undefined;
  let [a, b] = x[0] > x[1] ? [x[0], x[1]] : [x[1], x[0]];
  for (var i = 2; i < x.length; i += 1) {
    if (x[i] > a) {
      b = a;
      a = x[i];
      continue;
    }
    if (x[i] < a && x[i] > b) {
      b = x[i];
    }
  }
  return b;
}

//OU

const secondLargest = (array) =>
  Array.isArray(array)
    ? [
        ...new Set(array.filter((val) => !isNaN(parseInt(val))).map(Number)),
      ].sort((a, b) => b - a)[1]
    : undefined;

//OU

function secondLargest(arr) {
  if (!Array.isArray(arr)) return undefined;
  arr = arr.filter((a) => !isNaN(parseInt(a)));
  var max = Math.max(...arr);
  arr = arr.filter((a) => a < max);
  return arr.length === 0 ? undefined : Math.max(...arr);
}

//OU

function secondLargest(array) {
  if (!Array.isArray(array) || array.every((e) => array[0] === e))
    return undefined;
  return +[
    ...new Set(array.filter((e) => /\d$/.test(e)).sort((a, b) => b - a)),
  ][1];
}
