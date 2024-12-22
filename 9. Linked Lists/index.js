// Linked Lists

// What is a Linked list ?

// - A Linked list is a linear data structure that includes a series of connected nodes.
// - Each node store data and a reference to the next node in the list.
// - The list elements can be easily inserted or removed without reallocation or reorganization of the
//   entire structure because the data items need not be stored contiguously in memory or on disk.
// - The random access is not allowed in linked list. We have to access elements sequentially starting from
//   the first node. The accessing of the element has linear time complexity.
// - The linked list data structure supports three main operations:
//   - Insertion: Adds a new node to the list at beginning, end, or at a specified position.
//   - Deletion: Removes an existing node from the list.
//   - Searching: Searches for a node in the list.

// Linked list usage:

// - All applications of both stack and queues are application of linked lists.
// - Image viewer can use linked list to move forward and backward.

// Implementing a Linked List:
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // O(1)
  prepend(data) {
    // Adding an element at the beginning of the list
    const node = new Node(data);
    if (this.isEmpty()) {
      // head will always point to the first node, so we are checking if the list is empty
      // and if it is, we are setting the head to the new node
      this.head = node;
    } else {
      // If the list is not empty, we are setting the new node's next to the current head
      node.next = this.head;
      // And then setting the head to the new node
      this.head = node;
    }
    this.size++;
  }

  // O(n)
  append(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // O(n)
  insert(data, index) {
    if (index < 0 || index > this.size) {
      return;
    } else if (index === 0) {
      this.prepend(data);
      return;
    } else if (index === this.size) {
      this.append(data);
      return;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      const node = new Node(data);
      node.next = current.next;
      current.next = node;
      this.size++;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      return null;
    } else if (index === 0) {
      let value = this.head.data;
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let first = this.head;
      let second = this.head;
      for (let i = 0; i < index - 1; i++) {
        first = first.next;
      }
      for (let i = 0; i <= index; i++) {
        second = second.next;
      }
      let value = first.next.data;
      first.next = second;
      this.size--;
      return value;
    }
  }

  searchByIndex(index) {
    if (index < 0 || index >= this.size) {
      return null;
    } else if (index === 0) {
      return this.head.data;
    } else {
      let curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
      return curr.data;
    }
  }

  searchByValue(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  removeUsingValue(value) {
    let index = this.searchByValue(value);
    this.remove(index);
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Empty list");
      return;
    }
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result);
  }
}

// Creating a linked list
const list = new LinkedList();

// Checking if the list is empty
console.log(list.isEmpty()); // true

// Checking the size of the list
console.log(list.getSize()); // 0

// Prepending elements to the list
list.prepend(100);
list.prepend(200);
list.prepend(300);

// Checking the size of the list
console.log(list.getSize()); // 3

// Checking if the list is empty
console.log(list.isEmpty()); // false

// Printing the list
list.print(); // 300 -> 200 -> 100 ->

// Prepending elements to the list
list.prepend(400);
list.prepend(500);

// Printing the list
list.print(); // 500 -> 400 -> 300 -> 200 -> 100 ->

// Size of the list
console.log(list.getSize()); // 5

// Create a new linked list
const list2 = new LinkedList();

// Appending elements to the list
list2.append(100);
list2.append(200);
list2.append(300);
list2.append(400);

// Printing the list
list2.print(); // 100 -> 200 -> 300 -> 400 ->

// Size of the list
console.log(list2.getSize()); // 4

// Appending elements to the list
list2.append(500);
list2.append(600);

// Printing the list
list2.print(); // 100 -> 200 -> 300 -> 400 -> 500 -> 600 ->

// Size of the list
console.log(list2.getSize()); // 6

// Inserting elements to the list
list2.insert(700, 2);

// Printing the list
list2.print(); // 100 -> 200 -> 700 -> 300 -> 400 -> 500 -> 600 ->

// Size of the list
console.log(list2.getSize()); // 7

// Removing elements from the list
list2.remove(2);

// Printing the list
list2.print(); // 100 -> 200 -> 300 -> 400 -> 500 -> 600 ->

// Size of the list
console.log(list2.getSize()); // 6

// Searching for an element in the list
console.log(list2.searchByValue(300)); // 2

// Removing an element using its value
list2.removeUsingValue(300);

// Printing the list
list2.print(); // 100 -> 200 -> 400 -> 500 -> 600 ->

// Size of the list
console.log(list2.getSize()); // 5

// Searching for an element in the list
console.log(list2.searchByIndex(4)); // 600

// Searching for an element in the list
console.log(list2.searchByIndex(5)); // 600

// Reversing the list
list2.reverse();

// Printing the list
list2.print(); // 600 -> 500 -> 400 -> 200 -> 100 ->

// Time complexity of linked list operations:
// - Prepend: O(1)
// - Append: O(n)
// - Search: O(n)
// - Delete: O(n)
// - Insert: O(n)
// - Access: O(n)
// - Update: O(n)
// - Reverse: O(n)
// - Print: O(n)
