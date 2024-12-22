// Import the LinkedList class from List.js
const LinkedList = require("./List.js");

// Create a Queue class
class Queue {
  constructor() {
    // Create a new instance of a LinkedList
    this.list = new LinkedList();
  }

  // Add a value to the end of the queue
  enqueue(value) {
    this.list.append(value);
  }

  // Remove the first value from the queue
  dequeue() {
    return this.list.removeFromFront();
  }

  // Return the first value in the queue
  peek() {
    return this.list.head ? this.list.head.value : null;
  }

  // Return the size of the queue
  size() {
    return this.list.size();
  }

  // Check if the queue is empty
  isEmpty() {
    return this.list.size() === 0;
  }

  // Print the values in the queue
  print() {
    this.list.print();
  }
}

// Create a new instance of a Queue
const queue = new Queue();

// Add values to the queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// Print the size of the queue
console.log(queue.size()); // Output: 3

// Print the first value in the queue
console.log(queue.peek()); // Output: 1

// Remove the first value from the queue
queue.dequeue();

// Print the size of the queue
console.log(queue.size()); // Output: 2

// Print the first value in the queue
console.log(queue.peek()); // Output: 2

// Check if the queue is empty
console.log(queue.isEmpty()); // Output: false

// Remove the first value from the queue
queue.dequeue();

// Remove the first value from the queue
queue.dequeue();

// Check if the queue is empty
console.log(queue.isEmpty()); // Output: true

// Print the size of the queue
console.log(queue.size()); // Output: 0
