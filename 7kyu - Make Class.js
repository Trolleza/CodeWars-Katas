// 7kyu - Make Class

// I don't like writing classes like this:
// function Animal(name,species,age,health,weight,color) {
//   this.name = name;
//   this.species = species;
//   this.age = age;
//   this.health = health;
//   this.weight = weight;
//   this.color = color;
// }

// Give me the power to create a similar class like this:
// const Animal = makeClass("name","species","age","health","weight","color")

// Sample Tests:
// function Animal(name,species,age,health,weight,color) {
//   this.name = name;
//   this.species = species;
//   this.age = age;
//   this.health = health;
//   this.weight = weight;
//   this.color = color;
// }
// const Animel = makeClass('name','species','age','health','weight','color')

// describe("Basic Tests", function() {
//   const dog1 = new Animal('Bob','Dog','5','good','50lb','brown')
//   const dog2 = new Animel('Bob','Dog','5','good','50lb','brown')
//   it("check for object similarity", function() {
//     Test.assertEquals(Object.keys(dog1).join`,`,Object.keys(dog2).join`,`)
//     Test.assertEquals(Object.values(dog1).join`,`,Object.values(dog2).join`,`)
//   });
// });

function makeClass(...properties) {
  return class {
    constructor(...props) {
      properties.forEach((prop, index) => {
        this[prop] = props[index];
      });
    }
  };
}

//OU

function makeClass(...params) {
  return class {
    constructor(...args) {
      params.forEach((item, i) => (this[params[i]] = args[i]));
    }
  };
}

//OU

function makeClass(...properties) {
  return function () {
    for (let i = 0; i < arguments.length; i++)
      this[properties[i]] = arguments[i];
  };
}

//OU

const makeClass = (...props) => {
  return class {
    constructor(...args) {
      let i = 0;
      for (let prop of props) this[prop] = args[i++];
    }
  };
};
