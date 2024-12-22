// Import the LinkedList class from List.js
const LinkedList = require("./List.js");

// Stack push is equivalent to LinkedList prepend
// Stack pop is equivalent to LinkedList removeFromFront

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head ? this.list.head.data : null;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }
}

// Creating a stack
const stack = new Stack();

// Checking if the stack is empty
console.log(stack.isEmpty()); // true

// Checking the size of the stack
console.log(stack.getSize()); // 0

// Pushing elements to the stack
stack.push(100);
stack.push(200);
stack.push(300);

// Printing the stack
stack.print(); // 300 -> 200 -> 100 ->

// Checking the size of the stack
console.log(stack.getSize()); // 3

// Checking if the stack is empty
console.log(stack.isEmpty()); // false

// Popping elements from the stack
console.log(stack.pop()); // 300
console.log(stack.pop()); // 200

// Printing the stack
stack.print(); // 100 ->

// Checking the size of the stack
console.log(stack.getSize()); // 1

// Peeking the top element of the stack
console.log(stack.peek()); // 100

// Popping the last element from the stack
console.log(stack.pop()); // 100

// Checking if the stack is empty
console.log(stack.isEmpty()); // true

// Trying to pop from an empty stack
console.log(stack.pop()); // null

// Trying to peek from an empty stack
console.log(stack.peek()); // null

// Checking the size of the stack
console.log(stack.getSize()); // 0

// Printing the stack
stack.print(); // Empty list
