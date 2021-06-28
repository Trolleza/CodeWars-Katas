//7kyu - Interactive Dictionary

// In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

// >>> let d = new Dictionary();

// >>> d.newEntry("Apple", "A fruit that grows on trees");

// >>> console.log(d.look("Apple"));
// A fruit that grows on trees

// >>> console.log(d.look("Banana"));
// Can't find entry for Banana
// Good luck and happy coding!

// Sample Tests:
// d.newEntry('Apple', 'A fruit');
// Test.assertEquals(d.look('Apple'), 'A fruit');

// d.newEntry('Soccer', 'A sport');
// Test.assertEquals(d.look('Soccer'), 'A sport');
// Test.assertEquals(d.look('Hi'), 'Can\'t find entry for Hi');
// Test.assertEquals(d.look('Ball'), 'Can\'t find entry for Ball');

// d.newEntry('soccer', 'a sport');
// Test.assertEquals(d.look('soccer'), 'a sport');

class Dictionary {
  constructor() {
    this.obj = {};
  }
  newEntry(key, value) {
    this.obj[key] = value;
  }
  look(key) {
    return this.obj[key] || `Can't find entry for ${key}`;
  }
}

//OU

class Dictionary {
  newEntry(key, value) {
    this[key] = value;
  }
  look(key) {
    return this[key] || `Can't find entry for ${key}`;
  }
}
