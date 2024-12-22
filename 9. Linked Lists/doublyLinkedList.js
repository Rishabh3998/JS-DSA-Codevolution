// Doubly Linked List

// What is a doubly linked list ?

// - A doubly linked list is a type of linked list in which each node apart from storing its data has
//   two links. The first link points to the previous node in the sequence and the second link points
//   to the next node in the sequence.
// - The first node of the doubly linked list is called the head and the last node is called the tail.
// - The tail node has a reference to null.

// Advantages of doubly linked list over singly linked list:

// - A doubly linked list can be traversed in both forward and backward direction.
// - Deletion of a node in a doubly linked list is easier as compared to a singly linked list.
// - In a singly linked list, if a node is given, we cannot delete it without having a pointer to its
//   previous node. In a doubly linked list, we can delete a node without any reference to its previous
//   node.

// Disadvantages of doubly linked list over singly linked list:

// - A doubly linked list requires more space per node as compared to a singly linked list.
// - A doubly linked list requires more operations to be performed for insertion and deletion.

// Implementing a doubly linked list:

// - We will create a class Node which will have three properties: data, next, and prev.
// - The data property will store the data of the node.
// - The next property will store the reference to the next node.
// - The prev property will store the reference to the previous node.
// - We will create a class DoublyLinkedList which will have two properties: head and tail.
// - The head property will store the reference to the first node of the doubly linked list.
// - The tail property will store the reference to the last node of the doubly linked list.
// - We will implement the following operations:
//   - insertAtEnd: This operation will insert a new node at the end of the doubly linked list.
//   - deleteAtEnd: This operation will delete the last node of the doubly linked list.
//   - print: This operation will print the data of all the nodes in the doubly linked list.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  deleteAtEnd() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  printReverse() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  getLength() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  insertAtStart(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  deleteAtStart() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.head = this.head.next;
    this.head.prev = null;
  }
}
