// // 7kyu - Nth Smallest Element (Array Series #4)

// Task
// Given an array/list [] of integers , Find the Nth smallest element in this array of integers

// Notes
// Array/list size is at least 3 .
// Array/list's numbers could be a mixture of positives , negatives and zeros .
// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// Input >> Output Examples
// nthSmallest({3,1,2} ,2) ==> return (2)
// Explanation:
// Since the passed number is 2 , Then * the second smallest element in this array/list is 2*

// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7)
// Explanation:
// Since the passed number is 3 , Then * the third smallest element in this array/list is 7*

// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)
// Explanation:
// Since the passed number is 5 , Then * the fifth smallest element in this array/list is 92*

// describe("Basic tests",_=>{
//   Test.assertEquals(nthSmallest([3,1,2],2),2);
//   Test.assertEquals(nthSmallest([15,20,7,10,4,3],3),7);
//   Test.assertEquals(nthSmallest([-5,-1,-6,-18],4),-1);
//   Test.assertEquals(nthSmallest([-102,-16,-1,-2,-367,-9],5),-2);
//   Test.assertEquals(nthSmallest([2,169,13,-5,0,-1],4),2);
// });

function nthSmallest(arr, pos) {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[pos - 1]; //pois o pos quer o primeiro elemento da array, mas a array começa em zero, então precisa dar -1 nele.
}

//OU

const nthSmallest = (arr, pos) =>
  Math.max(...arr.sort((a, b) => a - b).slice(0, pos));

//OU

function nthSmallest(arr, pos) {
  const sorted = [...arr];

  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (sorted[j] > sorted[j + 1]) {
        const temp = sorted[j];

        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }

  return sorted[pos - 1];
}
