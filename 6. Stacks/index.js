// Stacks

// What is a stack ?

// - A stack data structure is a sequential collection of elements that follows the Last In First Out
//   (LIFO) principle.
// - The last element added to the stack is the first one to be removed.
// - For example:
// - A stack of plates. The last plate placed on the stack is the first one to be removed.
// - A stack is an abstract data type. It is defined by its behavior rather than being a mathematical
//   model.
// - A stack data structure supports two main operations:
//   - push: Adds an element to the stack.
//   - pop: Removes the most recently added element.
// - A stack can be implemented using an array or a linked list.

// Stack usage
// - Browser history: The back button in a web browser uses a stack to remember the last page you visited.
// - Undo functionality in text editors.
// - Expression evaluation: Stacks are used to convert infix expressions to postfix expressions.
// - Function call stack: The call stack is used to store information about the active subroutines
//   of a computer program.

// Implementing a stack using an array
// - We can implement a stack using an array in JavaScript.
// - The push operation can be implemented using the push() method of the array.
// - The pop operation can be implemented using the pop() method of the array.

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// Creating an object for the Stack class
let stack = new Stack();

// Testing isEmpty on an empty stack
console.log(stack.isEmpty()); // true

// Adding elements to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element
console.log(stack.printStack()); // 10 20 30

// Printing the top element
console.log(stack.peek()); // 30

// Removing the top element
console.log(stack.pop()); // 30

// Printing the stack element
console.log(stack.printStack()); // 10 20

// Testing isEmpty on a non-empty stack
console.log(stack.isEmpty()); // false

// Time complexity
// - The time complexity of the push operation is O(1).
// - The time complexity of the pop operation is O(1).
// - The time complexity of the peek operation is O(1).
// - The time complexity of the isEmpty operation is O(1).
// - The space complexity of the stack is O(n).
// - The space complexity of the stack is O(n) because we are using an array to store the elements
//   of the stack.

// Implementing a stack using a linked list
// - We can implement a stack using a linked list in JavaScript.
// - The push operation can be implemented by adding a new node to the beginning of the linked list.
// - The pop operation can be implemented by removing the first node from the linked list.

// Later....
