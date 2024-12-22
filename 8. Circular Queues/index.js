// Circular Queues

// - It is an extended version of queues.
// - The size of the queue is fixed and a single block of memory is used as if first element is connected
//   to the last element.
// - Also referred to as circular buffer or ring buffer and follows the FIFO principle.
// - A circular queue will reuse the empty block created during the dequeue operation.
// - When working with queues of fixed maximum size, a circular queue is a good choice.
// - A circular queue data structure supports two main operations:
//   - Enqueue: Adds an element to the rear/end/tail of the queue.
//   - Dequeue: Removes an element from the front/head of the queue.

// - Circular queues usage:

// - Clock
// - CPU scheduling
// - Streaming data
// - Traffic lights
// - Keyboard buffer

// Implementation of Circular Queue:

// Methods to implements:
// - enqueue: Adds an element to the rear/end/tail of the queue.
// - dequeue: Removes an element from the front/head of the queue.
// - isEmpty: Checks if the queue is empty.
// - isFull: Checks if the queue is full.
// - peek: Gets the element at the front/head of the queue.
// - size: Gets the number of elements in the queue.
// - print: Displays the elements of the queue.

// Implementation of Circular Queue using Array:
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength--;
      if (this.currentLength === 0) {
        this.front = -1;
        this.rear = -1;
      }
      return data;
    } else {
      this.front = -1;
      this.rear = -1;
      return null;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    } else {
      return null;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

// Create an object of CircularQueue class
const queue = new CircularQueue(5);

// Enqueue elements
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

// Print the queue
queue.print(); // 10 20 30 40

// Dequeue elements
queue.dequeue();
queue.dequeue();

// Print the queue
queue.print(); // 30 40

// Peek the front element
console.log(queue.peek()); // 30

// Enqueue elements
queue.enqueue(50);
queue.enqueue(60);

// Print the queue
queue.print(); // 30 40 50 60

// Size of the queue
console.log(queue.currentLength); // 4
