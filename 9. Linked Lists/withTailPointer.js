class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(data) {
    // Adding an element at the beginning of the list
    const node = new Node(data);
    if (this.isEmpty()) {
      // head will always point to the first node, so we are checking if the list is empty
      // and if it is, we are setting the head to the new node
      this.head = node;
      this.tail = node;
    } else {
      // If the list is not empty, we are setting the new node's next to the current head
      node.next = this.head;
      // And then setting the head to the new node
      this.head = node;
    }
    this.size++;
  }

  append(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.data;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.data;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
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

// Create a new linked list
const list = new LinkedList();

// Add elements to the list
list.prepend(1);
list.append(2);
list.append(3);
list.prepend(0);

// Print the list
list.print(); // 0 -> 1 -> 2 -> 3 ->

// Remove elements from the list
list.removeFromFront();

// Print the list
list.print(); // 1 -> 2 -> 3 ->

// Remove elements from the list
list.removeFromEnd();

// Print the list
list.print(); // 1 -> 2 ->
