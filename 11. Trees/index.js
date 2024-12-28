// Trees

// What is tree (Generic trees)?

// - A tree is a hierarchical data structure that consists of nodes connected by edges, each nodes stores
//   a data value.
// - A tree is a non-linear data structure, compared to arrays, linked lists, stacks, and queues which are
//   linear data structures.
// - In a linear data structure, the time required to search is proportional to the size of the data set.
// - Trees however, owing to the non-linear nature allow quicker and easier access to the data.
// - A tree will not contain any loops or cycle.

// Tree usage:

// 1. File system for directory structure
// 2. A family tree
// 3. DOM
// 4. Chat bot

// What is binary tree ?

// - A binary tree is a data structure in which each node has at most 2 children.
// - They are referred to as left child and right child.

// What is a binary search tree ?

// - The value of each left node must be smaller than the parent node.
// - The value of each eight node must be greater than the parent node.

// Operations:

// 1. Insertion: add a node to the tree
// 2. Search: search a given node inside the tree
// 3. DFS & BFS: To visit all the nodes inside tree
// 4. Deletion: Remove a node from the tree according to the given input

// BST usage:

// 1. Searching and sorting
// 2. To implement abstract data types such as lookup tables and priority queues

// Implement BST
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      // Root exists
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else if (newNode.value > root.value) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) return false;
    else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // Traversals:

  // DFS algos:

  // Pre-order
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  // In-order
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  // Post-order
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  // BFS algo:

  // Level-order
  levelOrder(root) {
    const queue = [];
    queue.push(root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  // Min node
  minNode(root) {
    if (!root.left) return root.value;
    else {
      return this.minNode(root.left);
    }
  }

  // Max node
  maxNode(root) {
    if (!root.right) return root.value;
    else {
      return this.maxNode(root.right);
    }
  }
}

// Create a BST
const bst = new BST();

// Testing isEmpty
console.log("Tree is empty ?", bst.isEmpty());

// Insert node
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(25);
bst.insert(7);

// Search
const isPresent = bst.search(bst.root, 7);
console.log(isPresent);

// Tree traversal:

// - Visiting every node is known as tree traversal.
// - A hierarchial data structure like a tree can be traversed in different ways.
//   - Depth first search (DFS)
//   - Breadth first search (BFS)

// DFS algo:

// - The DFS algo starts at the root node and explores as far as possible along each branch before
//   backtracking.
// - Visit the root node, visit all the nodes in the left subtree and visit all the nodes in the right
//   subtree.
// - Depending on the order in which we do this, there can be three types of traversals.
//   - Pre-order
//   - In-order
//   - Post-order

// Pre-order:

// Read data
// Visit left subtree
// Visit right subtree

// In-order:

// Visit left subtree
// Read data
// Visit right subtree

// Post-order:

// Visit left subtree
// Visit right subtree
// Read data

bst.preOrder(bst.root);
bst.inOrder(bst.root);
bst.postOrder(bst.root);

// BFS algo:

// - Explore all the nodes at the present depth prior to moving on to the nodes at the next levels.
// - Print all nodes level by level

// Steps to do this type of traversal:

// Create a queue
// Enqueue the root node
// As long as the node exists in the queue:
//  - Dequeue the node from the front.
//  - Read the nodes value.
//  - Enqueue the nodes left child if it exists
//  - Enqueue the nodes right child if it exists

bst.levelOrder(bst.root);

// Min
const min = bst.minNode(bst.root);
console.log(min);

// Max
const max = bst.maxNode(bst.root);
console.log(max);
