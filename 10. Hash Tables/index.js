// Hash Tables / Hash Maps

// What is a hash table ?

// - A hash table is a data structure that stores key-value pairs. It uses a hash function to compute an
//   index into an array of buckets or slots, from which the desired value can be found.
// - Given a key, the hash function computes an index that suggests where the key-value pair can be found:
//   - An ideal hash function will distribute the keys uniformly across the array.
//   - If two keys hash to the same index, a collision occurs.
// - To resolve collisions, we can use separate chaining or open addressing:
//   - Separate chaining: In separate chaining, each bucket is independent, and has some sort of list of
//     entries with the same index. The time for hash table operations is the time to find the bucket
//     (constant time), plus the time to iterate through the list.
//   - Open addressing: In open addressing, when a collision occurs, the hash table finds an alternative
//     location to place the item. The time for hash table operations is the time to find the bucket
//     (constant time), plus the time to resolve the collision.
// - Hash tables are widely used in computer science because they are an efficient way to implement a map.
// - In JavaScript, objects and maps are used to implement hash tables.

// Note: JS objects are the special implementation of hash table data structure. However, Object class adds
//       its own keys, keys that your input may conflict and overwrite the inherited default properties.

// Advantages of hash tables:

// - Hash tables have constant time complexity for both insertion and lookup.
// - Hash tables can be used to implement associative arrays, sets, and caches.
// - Hash tables are efficient for handling large amounts of data.

// Disadvantages of hash tables:

// - Hash tables have a space complexity of O(n).
// - Hash tables can have collisions, which can degrade performance.
// - Hash tables do not maintain order.

// By the way we can use Maps in JavaScript to implement hash tables. Maps are a collection of
// key-value pairs where both the keys and values can be objects, primitive values, or a combination
// of both.

// Hash table usage:

// - Hash tables are used in database indexing.
// - Hash tables are used to implement associative arrays.
// - Hash tables are used in caching.
// - Hash tables are used in sets.

// Implementing a hash table:

// - We will create a class HashTable which will have two properties: table and size.
// - The table property will store the key-value pairs.
// - The size property will store the size of the table.
// - We will implement the following operations:
//   - hash: This operation will compute the hash of a key.
//   - set: This operation will insert a key-value pair into the hash table.
//   - get: This operation will retrieve the value of a key from the hash table.
//   - remove: This operation will remove a key-value pair from the hash table.
//   - print: This operation will print all the key-value pairs in the hash table.

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    // The below code is creating collisions between key names which contains exact number of same
    // characters.
    // const index = this.hash(key);
    // this.table[index] = value;

    // The fix is to store an array of array or array of object in which the nested array/object will
    // store the key value pairs

    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameItemKey = bucket.find((item) => item[0] === key);
      if (sameItemKey) {
        sameItemKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    // The below code is usable for the previous set method, but now we need to change this so that it
    // can work with new set method.
    // const index = this.hash(key);
    // return this.table[index];

    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameItemKey = bucket.find((item) => item[0] === key);
      if (sameItemKey) {
        return sameItemKey[1];
      }
    }
    return undefined;
  }

  remove(key) {
    // const index = this.hash(key);
    // if (this.table[index]) {
    //   this.table[index] = undefined;
    // }

    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameItemKey = bucket.find((item) => item[0] === key);
      if (sameItemKey) {
        bucket.slice(bucket.indexOf(sameItemKey), 1);
      }
    }
  }

  print() {
    for (const key in this.table) {
      if (this.table[key]) {
        console.log(`${key}: ${this.table[key]}`);
      }
    }
  }
}

// Create a new hash table:
const table = new HashTable(50);

// Set key value pair in table:
table.set("name", "Rishabh");
table.set("age", 26);
table.set("mane", "Ritik"); // Here we just jumbled the name to mane, but the hash function gave the same
// key after execution which in result changed the value present in name key. To fix this we need to either
// create a better hash function or we can modify the set method.

// Print
table.print();

// Get key
console.log(table.get("name"));
console.log(table.get("mane"));
console.log(table.get("age"));

// Remove
table.remove("name");

// Print
table.print();

console.log(table);
