// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.

function isPalindrome(str) {
  let alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
  let chars = str.toLowerCase().split("").filter(el => alphanumeric.includes(el));
  return chars.join("") === chars.reverse().join("");
}

// Time complexity most likely O(n) because of the .split and .filter methods creating O(n + n)
// Space complexity is O(n) because the size of chars depends on input

// console.log(isPalindrome("A man, a plan, a canal: Panama")); // => true
// console.log(isPalindrome("race a car")); // => false
// console.log(isPalindrome("0P")); // => false


// Given an array, rotate the array to the right by k steps, where k is non - negative.
function rotate(nums, k) {
  for (let i = 0; i < k; i++) {
    // Were popping off the end .pop
    // Add it to the beginning
    // let popped = [nums.pop()];

    nums = [nums.pop()].concat(nums)
  }

  return nums;
}

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // => [5,6,7,1,2,3,4]
// console.log(rotate([-1, -100, 3, 99], 2)); // => [3,99,-1,-100]
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in -place with O(1) extra space ?

function uniqueOccurrences(arr) {
  // My initial thought is that I need to somehow count the number of times a value appears in the array
  // I think I can accomplish that goal with a hash tracking the number of times
  // Some sort of logic to check if hash values are unique

  // Hash to count number of times a value appears in array
  let countHash = {}; //arr = [1]
  arr.forEach(el => { //el = 1
    if (countHash[el]) countHash[el]++; 
    else countHash[el] = 1; //{1: 1}
  }); 

  // Logic to check if hash values are unique
      // Will slicing an array and shifting off an element to match with work?
      //    [1, 2, 3] el.shift() = 1, arr.slice(1) = [2, 3], does [2, 3] include 1? NO
      //     el.shift() = 2, arr.slice(1) = [3], does [3] include 2? NO
  let countArr = Object.values(countHash); // [1, 2, 3]
  let shiftedEle = countArr.shift(); // 1, countArr = [2, 3]
  
  while (countArr.length) {
    if (countArr.includes(shiftedEle)) {
      return false;
    } else {
      shiftedEle = countArr.shift();
    }
  }

  return true;
};

// Time complexity: worst-case O(n^2) because of nested loops
// Space complexity: worse-case O(n) because variable sizes depend on input sizes

// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // => true
// console.log(uniqueOccurrences([1, 2])); // => false
// console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // => true

// uniqueOccurrences alternatives:
// var uniqueOccurrences = function (arr) {
//   let myMap = new Map();
//   for (let num of arr) {
//     if (myMap.has(num)) {
//       myMap.set(num, (myMap.get(num) + 1));
//     } else {
//       myMap.set(num, 1);
//     };
//   };
//   let mySet = new Set();
//   for (const val of myMap.values()) {
//     if (mySet.has(val)) return false;
//     mySet.add(val);
//   };
//   return true;
// };

// var uniqueOccurrences = function(arr) {
//   const obj = {};
//   arr.forEach(val => obj[val] = (obj[val] || 0) + 1);
//   const val = Object.values(obj).sort((a, b) => a - b);
//   for (let i = 0; i < val.length - 1; i++) {
//     if (val[i] === val[i + 1]) return false;
//   }
//   return true;
// }

// var uniqueOccurrences = function(arr) {
//   const obj = arr.reduce((acc, cur) => {
//     acc[cur] ? acc[cur]++ : acc[cur] = 1
//     return acc
//   }, {});
//   const values = Object.values(obj);
//   const result = new Set(values);
//   return result.size === values.length;
// }

function toLowerCase(str) {
  // Initial thoughts: I'm taking in a string, what's the most efficient way to solve this problem"
  //  I have a string, I must check every character and if its not lowercase, we must amke it lowercase
  // Maybe I can make a map or object with keys pointing from uppercase to lowercase as a guide for this function

  let alphabetObj = {
    'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g',
    'H': 'h', 'I': 'i', 'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n',
    'O': 'o', 'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't', 'U': 'u',
    'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z'
  } ;

  return str.split("").map(char => {
    if (alphabetObj[char]) return alphabetObj[char];
    else return char;
  }).join("");
};

// Time complexity: O(n) because we do splits and maps but one after another meaning we do the whole split first then map
//  rather than doing map for each element within the split. Same with join.
// Space complexity: Space is O(C) because we only store alphabetObj and it isn't dependant on input size since
//  it remains the same

// console.log(toLowerCase("Hello")); // => "hello"
// console.log(toLowerCase("here")); // => "here"
// console.log(toLowerCase("LOVELY")); // => "lovely"

// var toLowerCase = function(str) {
//   let lowerCase = "";
//   for (let letter of str) {
//     const index = letter.charCodeAt(0);
//     if (index >= 65 && index <= 90) {
//       letter = String.fromCharCode(index + 32);
//     };
//     lowerCase += letter;
//   };
//   return lowerCase;
// };

// var toLowerCase = function(str) {
//   return str.split('').reduce((prev, cur) => {
//     let code = cur.charCodeAt(0);
//     if (64 < code && 91 > code) {
//       return prev + String.fromCharCode(32 + code);
//     };
//     return prev + cur;
//   }, "");
// };

// var toLowerCase = function(str) {
//   return true.toLowerCase();
// };