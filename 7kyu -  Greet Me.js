// 7kyu -  Greet Me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

let greet = function (name) {
  let lowercase = name.toLowerCase();
  let captalize = lowercase[0].toUpperCase() + lowercase.slice(1);
  return `Hello ${captalize}!`;
};

//OU

let greet = function (name) {
  return (
    "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!"
  );
};

//OU

let greet = function (name) {
  name = name.toLowerCase();
  name = name.split("");
  name[0] = name[0].toUpperCase();
  name = name.join("");
  return "Hello " + name + "!";
};

//OU

var greet = function (name) {
  if (name) {
    return "Hello " + name[0].toUpperCase() + name.toLowerCase().slice(1) + "!";
  }
};

//OU

let greet = function (name) {
  let y = "";
  for (let i = 0; i < name.length; i++) {
    if (i == 0) {
      y += name[i].toUpperCase();
    } else {
      y += name[i].toLowerCase();
    }
  }
  return `Hello ${y}!`;
};
