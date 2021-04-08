// Too long, didn't read
// You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, then the next greatest on both sides, the the next greatest, and so on...

// More info
// The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. Your function should not mutate the input array, and this will be tested (where applicable). Notice that the returned list will always be of odd size, since there will always be a definitive middle element.

// Examples
// []  -->  []
// [1]  -->  [1]
// [2, 1]  -->  [1, 2, 1]
// [1, 3, 2]  -->  [1, 2, 3, 2, 1]
// [-8, 42, 18, 0, -16]  -->  [-16, -8, 0, 18, 42, 18, 0, -8, -16]
// [-3, 15, 8, -1, 7, -1] --> [-3, -1, -1, 7, 8, 15, 8, 7, -1, -1, -3]

// fixed_tests = [
//   {input: [], expected: []},
//   {input: [1], expected: [1]},
//   {input: [2, 1], expected: [1, 2, 1]},
//   {input: [2, 3, 1], expected: [1, 2, 3, 2, 1]},
//   {input: [-8, 42, 18, 0, -16], expected: [-16, -8, 0, 18, 42, 18, 0, -8, -16]},
// ]

function mirror(data) {
  let sortedArray = data.map((x) => x).sort((a, b) => a - b); //coloca na ordem numérica do menor para o maior
  
  for (let i = sortedArray.length - 2; i >= 0; i--) {
    //nesse, o i já começa no maior elemento da array, que é o último elemento (length -1), percorre até o primeiro elemento (i > 0)
    sortedArray.push(sortedArray[i]); //i - 1, pois pula o último elemento que é o maior, e copia o resto, ao contrário, pois ali em cima, foi do maior para o menor.
  }
  return sortedArray;
};
