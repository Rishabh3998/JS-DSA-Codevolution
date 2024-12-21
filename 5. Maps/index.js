// Maps

// What is a map ?

// - A map is an ordered collection of key-value pairs. Both keys and values can be of any data type.
// - To retrieve a value from a map, you must know the key.
// - Maps are iterable, so you can easily loop through a map and access its keys and values.

// Objects vs Maps

// - Objects are unordered whereas Maps are ordered.
// - Keys in objects can only be strings or symbols, but keys in Maps can be of any data type.
// - An object has a prototype and may contains a few default keys, which may collide with your own
//   keys if you are not careful. A Map does not have a prototype and does not contain any default keys.
// - Objects are not iterable whereas Maps are iterable.
// - The number of items in an object must be determined manually, whereas a Map has a size property.
// - Apart from storing data, you can attach functionality to objects. Maps are only about storing data.

// Creating a map
const arr = [
  ["a", 1],
  ["b", 2],
];
const map = new Map(arr); // arr is optional

console.log(map);

// Iterate over the map
for (const [key, value] of map) {
  console.log(key, value);
}

// Add an element to the map
map.set("c", 3);

console.log(map);

// Check if the key is present in the map
console.log(map.has("c")); // true

// Delete an element from the map
map.delete("c");

console.log(map);

// Number of elements in the map
console.log(map.size); // 2

// Clear the map
map.clear();

console.log(map);
