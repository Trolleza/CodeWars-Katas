// 8kyu - Find the smallest integer in the array

// Given an array of integers your solution should find the smallest integer.

// For example:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// Sample Tests:
// assert.strictEqual(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
// assert.strictEqual(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
// assert.strictEqual(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
// assert.strictEqual(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
// assert.strictEqual(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b).shift();
  }
}

//OU

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//OU

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function (a, b) {
      return a - b;
    });
    return args[0];
  }
}

//OU

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

//OU

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((prev, curr) => {
      return prev < curr ? prev : curr;
    });
  }
}

//OU

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var lowest;
    for (let i = 0; i < args.length; i++) {
      if (i == 0) {
        lowest = args[i];
      } else {
        if (lowest >= args[i]) {
          lowest = args[i];
        }
      }
    }
    return lowest;
  }
}

//OU

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0];
    for (let i = 0; i < args.length; i++) {
      min = min < args[i] ? min : args[i];
    }
    return min;
  }
}
