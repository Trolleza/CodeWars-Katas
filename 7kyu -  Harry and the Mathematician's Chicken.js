// 7kyu -  Harry and the Mathematician's Chicken

// Harry's local chicken shop - The Golden Chick - sells chicken pieces in boxes of 3, 6 and 10.

// Write a function that takes the total number of chicken pieces Harry can eat (n) and returns an array of the possible numbers of chicken pieces he can buy, that are less than or equal to n.

// 0 chicken pieces is a valid chicken option.

// For example:

// chickenOptions(9)
// should return [0,3,6,9], as Harry can buy no boxes, a box of 3, a box of 6, or a box of 3 and a box of 6 (9 in total).

// For non-numeric input, the function should return [0].

// Sample Tests:
// Test.assertDeepEquals(chickenOptions(13),[ 0, 3, 6, 9, 10, 12, 13 ]);
// Test.assertDeepEquals(chickenOptions(2),[ 0 ]);
// Test.assertDeepEquals(chickenOptions(21),[ 0, 3, 6, 9, 10, 12, 13, 15, 16, 18, 19, 20, 21 ]);
// Test.assertDeepEquals(chickenOptions('mmmmm chicken'),[ 0 ]);

function chickenOptions(n) {
  if (typeof n != "number") return [0];
  let ex = new Set([1, 2, 4, 5, 7, 8, 11, 14, 17]),
    arr = [];
  return Array.from({ length: n + 1 }, (a, i) => i).filter((x) => !ex.has(x));
}

//OU

function chickenOptions(n) {
  var res = [0];
  for (let i = 1; i <= n; i++) {
    if (!(i % 3) || !(i % 10)) res.push(i);
    else
      for (let k = i - 10; k >= 0; k -= 10)
        if (!(k % 3)) {
          res.push(i);
          break;
        }
  }
  return res;
}

//OU

function chickenOptions(n) {
  const res = [0];
  for (let i = 3; i <= n; i++) {
    if (res.includes(i - 3) || res.includes(i - 10)) res.push(i);
  }
  return res;
}

//OU

function chickenOptions(n) {
  let r = [];
  for (let i = 0; i <= n; i++) {
    if (
      i % 3 == 0 ||
      i % 9 == 0 ||
      i % 10 == 0 ||
      i % 13 == 0 ||
      i % 16 == 0 ||
      i % 19 == 0 ||
      i > 20
    )
      r.push(i);
  }
  return r.length ? r : [0];
}
