// 7kyu -  Fun with lists: length

// Implement the method length, which accepts a linked list (head), and returns the length of the list.

// For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

// The linked list is defined as follows:
// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }

// Note: the list may be null and can hold any type of value.

// Good luck!

// Test.assertEquals(length(null), 0);
// Test.assertEquals(length(listFromArray([1, 2, 3, 4])), 4);

const length = (head) => (head === null ? 0 : 1 + length(head.next));

//OU

function length(head) {
  if (head == null) return 0;
  else return 1 + length(head.next);
}

//OU

function length(head) {
  return !head ? 0 : 1 + length(head.next);
}

//OU

function length(head) {
  var currentNode = head;

  for (var i = 0; currentNode; ++i) {
    currentNode = currentNode.next;
  }
  return i;
}

//OU

function length(head) {
  let result = 0;
  while (head) {
    head = head.next;
    ++result;
  }
  return result;
}

//OU

function length(head) {
  if (head === null || head === undefined) return 0;
  let count = 0;

  while (head) {
    head = head.next;
    count++;
  }
  return count;
}
