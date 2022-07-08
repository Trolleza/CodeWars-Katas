// 7kyu - Every possible sum of two digits

// Description:

// Given a long number, return all the possible sum of two digits of it.

// For example, 12345: all possible sum of two digits from that number are:

// [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]

// Therefore the result must be:

// [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

function digits(num) {
  let result = [];
  num = num.toString();
  for (let i = 0; i < num.length; i++)
    for (let j = i + 1; j < num.length; j++) result.push(+num[i] + +num[j]);
  return result;
}

//OU

function digits(num) {
  let res = [];
  String(num)
    .split("")
    .forEach((d, i, arr) => {
      for (let j = i + 1; j < arr.length; j++)
        res.push(Number(d) + Number(arr[j]));
    });
  return res;
}

//OU

function digits(num) {
  let str = num.toString();
  let sum = 0;
  let arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      sum = +str[i] + +str[j];
      arr.push(sum);
    }
  }
  return arr;
}
