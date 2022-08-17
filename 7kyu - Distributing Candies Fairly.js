// 7kyu - Distributing Candies Fairly

// Description:

// There are some candies that need to be distributed to some children as fairly as possible (i.e. the variance of result needs to be as small as possible), but I don't know how to distribute them, so I need your help. Your assignment is to write a function with signature distribute(m, n) in which m represents how many candies there are, while n represents how many children there are. The function should return a container which includes the number of candies each child gains.
// Notice

//     The candy can't be divided into pieces.
//     The list's order doesn't matter.

// Requirements

//     The case m < 0 is equivalent to m == 0.
//     If n <= 0 the function should return an empty container.
//     If there isn't enough candy to distribute, you should fill the corresponding number with 0.

// Examples

// distribute(-5,  0) // should be []
// distribute( 0,  0) // should be []
// distribute( 5,  0) // should be []
// distribute(10,  0) // should be []
// distribute(15,  0) // should be []
// distribute(-5, -5) // should be []
// distribute( 0, -5) // should be []
// distribute( 5, -5) // should be []
// distribute(10, -5) // should be []
// distribute(15, -5) // should be []
// distribute(-5, 10) // should be [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// distribute( 0, 10) // should be [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// distribute( 5, 10) // should be [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
// distribute(10, 10) // should be [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// distribute(15, 10) // should be [2, 2, 2, 2, 2, 1, 1, 1, 1, 1]

function distribute(m, n) {
  if (n <= 0) return [];
  let arr = Array(n).fill(0);
  while (m > 0) arr = arr.map((x) => (m > 0 ? (m--, ++x) : x));
  return arr;
}

//OU

function distribute(m, n) {
  if (n < 1) return [];
  let arr = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    ++arr[i % n];
  }
  return arr;
}

//OU

function distribute(m, n) {
  return n <= 0
    ? []
    : m <= 0
    ? Array(n).fill(0)
    : Array.from({ length: n }, (el, i) =>
        i < m % n ? Math.floor(m / n) + 1 : Math.floor(m / n)
      );
}

//OU

function distribute(m, n) {
  if (n <= 0) return [];
  const arr = new Array(n).fill(0);

  for (let i = 0; m > 0; i++, m--) {
    if (i >= n) i = 0;
    arr[i]++;
  }
  return arr;
}
