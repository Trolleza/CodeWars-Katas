// Task:
// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

// Do not modify the input.

// Some examples:
// keepOrder([1, 2, 3, 4, 7], 5) //=> 4
//                       ^(index 4)
// keepOrder([1, 2, 3, 4, 7], 0) //=> 0
//           ^(index 0)
// keepOrder([1, 1, 2, 2, 2], 2) //=> 2
//                 ^(index 2)

// describe("Example tests", function() {
//   it("Fixed cases", function() {
//     Test.assertSimilar(keepOrder([1, 2, 3, 4, 7], 5), 4);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4, 7], 0), 0);
//     Test.assertSimilar(keepOrder([1, 1, 2, 2, 2], 2), 2);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], 5), 4);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], -1), 0);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], 2), 1);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], 0), 0);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], 1), 0);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], 2), 1);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], 3), 2);
//   });
// });

function keepOrder(ary, val) {
  ary.push(val);
  ary = ary.sort(function(a, b) {
    return a - b;
  });
  return ary.indexOf(val);
};