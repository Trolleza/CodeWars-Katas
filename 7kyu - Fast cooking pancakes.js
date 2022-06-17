// 7kyu - Fast cooking pancakes

// Description:

// You need to cook pancakes, but you are very hungry. As known, one needs to fry a pancake one minute on each side. What is the minimum time you need to cook n pancakes, if you can put on the frying pan only m pancakes at a time? n and m are positive integers between 1 and 1000.

// Sample Tests:
// Test.assertEquals(cookPancakes(1, 2), 2)
// Test.assertEquals(cookPancakes(2, 2), 2)
// Test.assertEquals(cookPancakes(4, 2), 4)

function cookPancakes(n, m) {
  return m > n * 2 || n === 1 ? 2 : Math.ceil((n * 2) / m);
}

//OU

function cookPancakes(n, m) {
  const time = Math.ceil((n * 2) / m);
  return time === 1 ? 2 : time;
}

//OU

function cookPancakes(n, m) {
  if (n < m) return 2;
  else if (n >= m) return Math.ceil((n * 2) / m);
}

//OU

function cookPancakes(n, m) {
  return n <= m ? 2 : Math.ceil((2 * n) / m);
}
