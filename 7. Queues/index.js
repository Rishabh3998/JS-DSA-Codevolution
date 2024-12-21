// Queues

// What is a Queue ?

// - A queue data structure is a sequential collection of elements, with a FIFO (First In, First Out)
//   ordering.
// - The first element added to the queue will be the first one to be removed.
// - This is equivalent to a line of people waiting for a bus: the first person to arrive at the bus stop
//   will be the first person to board the bus.
// - A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other
//   end (front/head).
// - Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model.
// - queue data structure supports two main operations:
//   - Enqueue: adding an element to the end/rare/tail of the queue.
//   - Dequeue: removing an element from the front/head of the queue.

// Queue usage

// - Queues are used in many real-world scenarios, such as:
//   - Serving requests on a single shared resource, like a printer.
//   - CPU scheduling.
//   - Traffic management.
//   - Breadth-first search.
//   - Handling of interrupts in real-time systems.
//   - Call center systems.
//   - Simulating a wait line.
//   - Handling of customers in banks.
//   - Handling of customers in airports.

// Implementing a Queue
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    // Not optimized
    return this.items.shift(); // This removes an element using a linear time complexity of O(n).
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  printQueue() {
    // for (let i = 0; i < this.items.length; i++) {
    //   console.log(this.items[i]);
    // }
    console.log(this.items.toString());
  }
}

// Creating an object for the Queue class
let queue = new Queue();

// Testing isEmpty on an empty queue
console.log(queue.isEmpty()); // true

// Adding elements to the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// Printing the queue element
console.log(queue.printQueue()); // 10 20 30

// Printing the front element
console.log(queue.peek()); // 10

// Removing the front element
console.log(queue.dequeue()); // 10

// Printing the queue element
console.log(queue.printQueue()); // 20 30

// size of the queue
console.log(queue.size()); // 2

// To make enqueue and dequeue in constant time complexity O(1), we can use an object instead of an array.

// Implementing a Queue using an object
class OptimizedQueue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.end = 0;
  }

  enqueue(element) {
    this.items[this.end] = element;
    this.end++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    const data = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return data;
  }

  isEmpty() {
    return this.end - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.end - this.front;
  }

  printQueue() {
    console.log(this.items);
  }
}

// Creating an object for the OptimizedQueue class
let optimizedQueue = new OptimizedQueue();

// Testing isEmpty on an empty queue
console.log(optimizedQueue.isEmpty()); // true

// Adding elements to the queue
optimizedQueue.enqueue(10);
optimizedQueue.enqueue(20);
optimizedQueue.enqueue(30);

// Printing the queue element
console.log(optimizedQueue.printQueue()); // { '0': 10, '1': 20, '2': 30 }

// Printing the front element
console.log(optimizedQueue.peek()); // 10

// Removing the front element
console.log(optimizedQueue.dequeue()); // 10

// Printing the queue element
console.log(optimizedQueue.printQueue()); // { '1': 20, '2': 30 }

// size of the queue
console.log(optimizedQueue.size()); // 2

// Time complexity of Queue operations

// - Enqueue: O(1)
// - Dequeue: O(1)
// - Peek: O(1)
// - isEmpty: O(1)
// - size: O(1)
