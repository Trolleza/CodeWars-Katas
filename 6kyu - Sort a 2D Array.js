// Sort a 2D array

// In the office we love to do amazing activities all together so we can share incredible experiences. This time, we decided to do bungee jumping. To decide the order we are going to jump, we need to create a sorter algorithm with the next rules.

// 1) We will receive a list of names for each department, so at the end we will have a 2D array with different length

// 2) We will return a normal array with all the names in the correct order

// 3) The sequence will be to add all the names sorted by the length of the name (ASC). In case there are more than one with the same length, sort them alphabetically.

// describe("Function namesSorter", function(){

//   it ("returns an array", function(){
//     var arr = [["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]];
//     Test.expect(Array.isArray(namesSorter(arr)), "Is not returning an array");
//   });

//   it ("returns ['Brad', 'Juan'] when array is [['Juan'], ['Brad']]", function(){
//     Test.assertDeepEquals(namesSorter([['Juan'], ['Brad']]), ['Brad', 'Juan']);
//   });

//   it ("returns [ 'Brad', 'Juan', 'Ariel', 'Julia', 'Michael', 'Alexander' ] when array is [['Juan','Ariel','Julia'], ['Brad','Michael','Alexander']]", function(){
//     Test.assertDeepEquals(namesSorter([['Juan','Ariel','Julia'], ['Brad','Michael','Alexander']]), [ 'Brad', 'Juan', 'Ariel', 'Julia', 'Michael', 'Alexander' ]);
//   });

//   it ("returns [ 'Brad','John','Josh','Juan','Ariel','Julia','Mikel','Pablo','George','Enrique','Gonzalo','Michael','Alexander' ] when array is [['Pablo', 'Enrique', 'Josh', 'Juan', 'Gonzalo'], ['Michael', 'Alexander', 'Mikel', 'Ariel'], ['John', 'Julia', 'Brad', 'George']]", function(){
//     Test.assertDeepEquals(namesSorter([["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]]), [ 'Brad','John','Josh','Juan','Ariel','Julia','Mikel','Pablo','George','Enrique','Gonzalo','Michael','Alexander' ]);
//   });
// });

function namesSorter(departmentsArray) {
  let arr = [];
  for (let i = 0; i < departmentsArray.length; i++) {
    for (let j = 0; j < departmentsArray[i].length; j++) {
      arr.push(departmentsArray[i][j]);
    } // ou: const people = [].concat(...departmentsArray);
  }

  arr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length; // sort by word length
    } else {
      return a.localeCompare(b); // sort alphabetically
    }
  });
  return arr;
}

// OU:

function namesSorter(arr) {
  return []
    .concat(...arr)
    .sort((a, b) => a.length - b.length || a.localeCompare(b));
}
