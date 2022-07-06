// 7kyu - FIXME: Get Full Name

// The code provided is supposed return a person's Full Name given their first and last names.

// But it's not working properly.
// Notes

// The first and/or last names are never null, but may be empty.
// Task

// Fix the bug so we can all go home early.

class Dinglemouse {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`.trim();
  }
}

//OU

function Dinglemouse(r, s) {
  this.getFullName = (_) => (r + " " + s).trim();
}

//OU

class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    var full = this.firstName + " " + this.lastName;
    return full.trim();
  }
}

//OU

class Dinglemouse {
  constructor(a, b) {
    this.name = [a, b];
  }

  getFullName() {
    return this.name.filter(Boolean).join` `;
  }
}

//OU

class Dinglemouse {
  constructor(...args) {
    [this.firstName, this.lastName] = args;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}
