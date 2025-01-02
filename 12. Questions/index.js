// Question 1:
// Reverse a string
// Given a string, return a new string with the reversed order of characters
// Examples:
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'

function reverse(str) {
  // Approach 1:
  // As we know that the strings are like arrays, so we can use array methods on them.
  // First we split the string into an array of characters, then we reverse the array and then joint
  // the array back into a string.
  // return str.split("").reverse().join("");

  // Approach 2:
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Question 1.1:
// Reverse an integer

function reverseInteger(number) {
  return (
    parseInt(number.toString().split("").reverse().join("")) * Math.sign(number)
  );
}

const res = reverse("apple");
console.log(res);

const resI = reverseInteger(1234);
console.log(resI);

const resI2 = reverseInteger(-1234);
console.log(resI2);

// Question 2:
// Check if the string is a palindrome or not
// isPalindrome('racecar') === true
// isPalindrome('hello') === false

function isPalindrome(str) {
  let reverseStr = reverse(str);
  if (reverseStr === str) {
    return true;
  }
  return false;
}

const resP = isPalindrome("racecar");
console.log(resP);

const resP2 = isPalindrome("hello");
console.log(resP2);

// Question 3:
// In a given string, return the character that is most commonly used in the string.
// maxChar('abcccccccd') === 'c'
// maxChar('apple 1231111') === '1'

function maxChar(str) {
  const map = {};
  for (let char of str) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }
  // Traverse on this map and return the key with the maximum value
  let max = 0;
  let maxKey = "";
  Object.keys(map).forEach((key) => {
    if (map[key] > max) {
      max = map[key];
      maxKey = key;
    }
  });
  return maxKey;
}

const resM = maxChar("abcccccccd");
console.log(resM);

const resM2 = maxChar("apple 1231111");
console.log(resM2);

// Question 4:
// Array chunking
// Given an array and chunk size, divide the array into many sub-arrays where each subarray is of length
// size.

// Examples:
// chunk([1, 2, 3, 4], 2) === [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) === [[1, 2], [3, 4], [5]]

function chunk(array, size) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const resC = chunk([1, 2, 3, 4], 2);
console.log(resC);

const resC2 = chunk([1, 2, 3, 4, 5], 2);
console.log(resC2);

// Question 5:
// Write a function that accepts a string. The function should capitalize the first letter of each word in
// the string then return the capitalized string.

// Examples:
// capitalize('a short sentence') === 'A Short Sentence'
// capitalize('a lazy fox') === 'A Lazy Fox'

function capitalize(str) {
  let words = str.split(" ");
  let result = [];
  words.forEach((word) => {
    result.push(`${word[0].toUpperCase()}${word.slice(1)}`);
  });
  return result.join(" ");
}

const resCap = capitalize("a short sentence");
console.log(resCap);

const resCap2 = capitalize("a lazy fox");
console.log(resCap2);

// Question 6:
// Check if the two given strings are anagrams of each other.

// Examples:
// anagrams('rail safety', 'fairy tales') === true
// anagrams('hello', 'bye') === false

function isAnagram(str1, str2) {
  const map = {};
  for (let char of str1) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }
  for (let char of str2) {
    if (map[char]) {
      map[char]--;
    }
  }
  let result = true;
  Object.keys(map).forEach((key) => {
    if (map[key] !== 0) {
      result = false;
    }
  });
  return result;
}

const resA = isAnagram("rail safety", "fairy tales");
console.log(resA);

const resA2 = isAnagram("hello", "bye");
console.log(resA2);

// Question 7:
// Write a function that returns the number of vowels used in a string.

// Examples:
// vowels('hello') === 2
// vowels('why') === 0

function vowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const resV = vowels("hello");
console.log(resV);

const resV2 = vowels("why");
console.log(resV2);
