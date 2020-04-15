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

function numberOfSteps(num) {
  // I need a count variable
  let count = 0;

  // I'm going to make use of modulo to check if number is even or odd, then remove or divide accordingly
  //    and add to count for each step

  while (num !== 0) {
    if (num % 2 === 0) {
      num /= 2;
      count++;
    } else {
      num--;
      count++;
    }
  }

  return count;
}

// Time Complexity: Using a single while loop causes time complexity to be O(n)
// Space Complexity: Our count variable likely causes O(logn) because we must subtract one or divide by two

// console.log(numberOfSteps(14)); // => 6
// console.log(numberOfSteps(8)); // => 4
// console.log(numberOfSteps(123)); // => 12 

//Alternative methods:
// var numberOfSteps = function(num, count = 0) {
//   if (num === 0) return count;
//   return num % 2 === 0 ? numberOfSteps(num / 2, count + 1) : numberOfSteps(num - 1, count + 1);
// }

// function numJewelsInStones(J, S) {
//   // Naive solution is to just do 2 for loops and have a count variable, however many times 
//   //    each J === each S, count++;
//   let count = 0;
//   for (let i = 0; i < J.length; i++) {
//     for (let j = 0; j < S.length; j++) {
//       if (J[i] === S[j]) count++;
//     };
//   };
//   return count;
// }

// Time complexity: O(n^2) time
// Space complexity: O(n) space

// Optimized solution:
function numJewelsInStones(J, S) {
  // I know that the characters in J are distinct
  // I can turn J into a hash and then use a count variable for each item of S
  // Return count added up, this might trade space for better time

  let jewelsObj = {};
  // O(n)
  J.split("").forEach(char => {
    jewelsObj[char] = 0;
  });

  // O(n)
  for (let i = 0; i < S.length; i++) {
    if (jewelsObj[S[i]] !== undefined) jewelsObj[S[i]] += 1;
  };

  // O(n)
  let counted = 0;
  Object.values(jewelsObj).forEach(count => {
    counted += count;
  })

  return counted;
}

// Time complexity: O(n) time
// Space complexity: O(n) space

// console.log(numJewelsInStones("aA", "aAAbbbb")); // => 3
// console.log(numJewelsInStones("z", "ZZ")); // => 0

// Alternative solutions:
// const numJewelsInStones = (J, S) => {
//   const jewels = new Set(J);
//   return S.split("").reduce((res, s) => res + jewels.has(s), 0);
// };
// var numJewelsInStones = function(S, J) {
//   let count = 0;
//   let len = S.length;
//   for (let i = 0; i < len; i++) {
//     if (J.indexOf(S[i]) >= 0) {
//       count++;
//     };
//   };
//   return count;
// };

function findNumbers(nums) {
  let evenCount = 0;
  nums.forEach(el => {
    if (findDigits(el) % 2 === 0) {
      evenCount++;
    }
  })
  return evenCount;
};

// Time complexity O(nlogn) because we iterate over nums but findDigits is logn runtime
// Space complexity is O(n) because worse case all are even numbers

function findDigits(n, count = 0) {
  // add one to count every time we perform modulo 
  // base case if no modulo to perform, return 1?
  if (n < 10) return 1;

  ++count;
  if (Math.floor(n / 10) >= 10) {
    return findDigits(Math.floor(n / 10), count)
  }
  else return ++count;

  // Time complexity is O(logn) because recursion but dividing by 10
  // Space complexity is O(C) because the same variable gets added a couple of times
};

// console.log(findNumbers([12, 345, 2, 6, 7896])); // => 2
// console.log(findDigits(23921)); // => 5

// Alternative solutions:
// var findNumbers = function(nums) {
//   const isEvenNums = nums => {
//     return String(num).length % 2 === 0;
//   };
//   return nums.filter(el => isEvenNums(el)).length;
// }

// var findNumbers = function(nums) {
//   var even = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i].toString().length % 2 === 0) {
//       even++;
//     }
//   }
//   return even;
// }

// var findNumbers = function(nums) {
//   return nums.filter(n => (n > 9 && n < 100) || (n > 999 && n < 10000)).length
// }

function countNegatives(grid) {
  let count = 0;
  grid.forEach(el => {
    el.forEach(innerEl => {
      if (innerEl < 0) count++;
    });
  });
  return count;
};

// Time complexity: O(n^2) because we use 2 loops nested
// Space complexity: O(C) because we only manipulate the same count variable

console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]])); // => 8

