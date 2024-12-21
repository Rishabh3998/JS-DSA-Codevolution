// Sets

// What is a Set ?

// - A Set is a data structure that can hold a collection of values.
// - These values however must be unique.
// - A Set can contain a mix of different data types. You can store strings, numbers, booleans, objects,
//   and even other sets in the same set.
// - Sets are dynamically sized. You don't have to declare the size of Set before creating it.
// - Sets do not maintain insertion order.
// - Sets are iterable. You can loop through the elements of a set using the forEach() method.

// Sets vs Arrays

// - Arrays can contain duplicate values, but Sets cannot.
// - Insertion order is maintained in arrays, but not in Sets.
// - Searching and deleting elements in a Set is faster than in an Array.

// Creating a set
const arr = [1, 2, 3];
const set = new Set(arr);

console.log(set);

const dupVal = [1, 2, 3, 1, 2, 3];
const setDup = new Set(dupVal);

console.log(setDup);

// Iterate over the set
for (const item of set) {
  console.log(item);
}

// Add an element to the set
set.add(4);
set.add(4); // Duplicate value will not be added

console.log(set);

// Check if the value is present in the set
console.log(set.has(4)); // true
console.log(set.has(5)); // false

// Delete an element from the set
set.delete(4);

console.log(set);

// Number of elements in the set
console.log(set.size); // 3

// Clear the set
set.clear();

console.log(set);
