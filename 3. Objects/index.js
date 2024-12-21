// Objects

// - An object is and unordered collection of key-value pairs. The key must either be a string or symbol
//   data type where as the value can be of any data type.
// - To retrieve the value, you can use the corresponding key. This can be achieved using the dot notation
//   or bracket notation.
// - An object is not iterable. You cannot use the for of loop on an object. But if we still want to access
//   all the key value pairs of an object one by one we can use Object.keys, Object.values, Object.entries.

const obj = {
  name: "Rishabh",
  age: 26,
  "key-three": 3,
  sayMyName: function () {
    console.log(this.name);
  },
  ArrowFunction: () => {
    console.log(this.name); // Should throw undefined because this binding is not present.
  },
};

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-three"]);

// Add a new key-value pair into the obj which is non-existent
obj.hobby = "cricket";

console.log(obj);

// Delete hobby key programmatically
delete obj.hobby;

console.log(obj);

// Freeze and object so that we cannot add, update and remove any key-value pair
Object.freeze(obj);

// Trying to add a key after freezing the object
obj.add = "key";

// Not added in the obj as we can see
console.log(obj);

// Updating the existing key
obj.name = "Ritik";

// Not updated
console.log(obj);

const person = {
  name: "Ritik",
  age: 24,
};

// Seal the person object so we cannot add and remove any key-value pair but can still update the existing
Object.seal(person);

// Adding add key
person.add = "key";

// Not added
console.log(person);

// Updating existing key (name)
person.name = "Vansh";

// Updated
console.log(person);

// Calling the existing function in obj
obj.sayMyName();
obj.ArrowFunction();

// Object.keys
console.log(Object.keys(obj));

// Object.values
console.log(Object.values(obj));

// Object.entries
console.log(Object.entries(obj));

// Time complexity:

// - Insert = O(1)
// - Remove = O(1)
// - Access = O(1)
// - Search = O(n)
// - Object.keys = O(n)
// - Object.values = O(n)
// - Object.entries = O(n)
// - Object.freeze = O(n)
// - Object.seal = O(n)
// - Object.assign = O(n)
// - Object.create = O(n)
