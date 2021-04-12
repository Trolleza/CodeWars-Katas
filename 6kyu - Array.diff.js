// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// describe("Sample tests", function() {
//   it("Should pass Sample tests", function() {
//     Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
//     Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
//     Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
//     Test.assertDeepEquals(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
//   });
// }); 

function arrayDiff(a, b) {
  
//   return a.filter(x => !b.includes(x))

// OU:
  
  const result = []
  for(let i = 0; i < a.length; i++){
    let includes = false
    for(let j = 0; j < b.length; j++){
      if(a[i] === b[j])
        includes = true
    }
    if(!includes)
      result.push(a[i])
  }
  return result
}

//OU

// function arrayDiff(a1, a2) {
//   let result = [];
//   for (let i = 0; i < a1.length; i++) {
//     if (a2.indexOf(a1[i]) === -1) {
//       //O método indexOf() retorna -1 se o valor não for encontrado.
//       result.push(a1[i]);
//     }
//   }
//   return result;
// }



