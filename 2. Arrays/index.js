// Arrays

// - An Array is a Data structure that can hold a collection of values.
// - Arrays can contain a mix of different data types. You can store string, booleans, numbers or even
//   objects all in the same array. (Only acceptable in Javascript)
// - Arrays are resizable. You don't have to declare the size of an array before creating it.
// - Javascript arrays are zero-indexed and the insertion order is maintained.
// - For example: const arr = [1,2,3,4] => 1 is at 0 index, ..., and 4 is at array.length - 1 idx i.e. 3
// - Arrays are iterable. They can be traversed using for of loop.

const arr = [1, 2, 3, "Rishabh"];
console.log(arr);

// Add an element at end of the array (arr)
arr.push(4);

// Add an element in the front or the beginning of the array (arr)
arr.unshift(5);

console.log(arr[0]);
console.log(arr);

// Traversing the array:

// Using for of loop on array (arr)
for (const item of arr) {
  console.log(item);
}

// Using for in loop on array (arr)
for (const index in arr) {
  console.log(arr[index]);
}

// To remove the first element from an array use shift method
console.log(arr);

// shift will remove the first element i.e. is 5
arr.shift();

console.log(arr);

// To remove the last element or an element from the end we can use pop method

console.log(arr);

// Last element will be removed
arr.pop();

console.log(arr);

// Other methods to explore
// Map, filter, reduce, concat, slice, splice

// Time complexity of the above methods

// - Insert/remove from end = O(1)
// - Insert/remove from beginning = O(n)
// - Access = O(1)
// - Search = O(n) = Linear search
// - Search = O(logN) = Binary search (Element should be of same data type and sorted in the array)
// - Push/Pop = O(1)
// - Shift/Unshift/Concat/Slice/Splice = O(n)
// - forEach, Map, Filter, Reduce = O(n)
