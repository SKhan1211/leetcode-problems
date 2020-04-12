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

