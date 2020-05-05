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

// console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]])); // => 8

// Alternative solutions:
// const countNegatives = grid => grid.reduce((acc, curr) => acc + curr.filter(n => n < 0).length, 0);
// var countNegatives = function(grid) {
//   let count = 0;

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = grid[i].length - 1; j >= 0; j-= 1) {
//       if (grid[i][j] < 0) {
//         count += 1;
//       } else {
//         break;
//       }
//     }
//   }
//   return count;
// }
// var countNegatives = function(grid) {
  // return grid.map(el => el.filter(el => el !== Math.abs(el))).map(el => el.length).reduce((prev, curr) => curr += prev);
// }

function reverseWords(str) {
  return str.split(" ").map(el => el.split("").reverse().join("")).join(" ");
};

// Time complexity: O(n^2) because we nest a loop inside the map, this is naive solution
// Space complexity: O(C) because we aren't using memory at all

// console.log(reverseWords("Let's take LeetCode contest")); // => "s'teL ekat edoCteeL tsetnoc"

// Alternative methods:
// var reverseWords = function(s) {
//   let res = '';
//   let word = '';
//   for (let c of s) {
//     if (c === ' ') {
//       res += word + c;
//       word = '';
//     } else {
//       word = c + word;
//     }
//   }
//   return res + word;
// }
// let reverse = (start, end, array) => {
//   while (start < end) {
//     let temp = array[start];
//     array[start] = array[end];
//     array[end] = temp;
//     start++;
//     end--;
//   }
// }

// var reverseWords = function(s) {
//   let copy = [...s];
//   let i = 0, j = 0;
//   while (j < s.length) {
//     if (copy[j] === ' ') {
//       reverse(i, j - 1, copy);
//       i = j + 1;
//     }
//     j++;
//   }
//   reverse(i, s, length - 1, copy);
//   return copy.join('');
// }

function repeatedNTimes(arr) {
  let countObj = {};
  for (let n of arr) {
    if (countObj[n]) countObj[n] += 1;
    else countObj[n] = 1;
  }
  for (let key in countObj) {
    if (countObj[key] !== 1) return key;
  }
};

// Time complexity: O(n) because of our looping
// Space complexity: O(N) because countObj size depends on input size

// console.log(repeatedNTimes([1, 2, 3, 3])); // 3
// Alternative Methods:
// var repeatedNTimes = function(A) {
//   let lookup = new Set();
//   for (let n of A) {
//     if (lookup.has(n)) return n;
//     lookup.add(n);
//   };
//   return -1;
// }
// var repeatedNTimes = function(A) {
//   for (let i = 0, elems = new Set(); i < A.length; i++) {
//     if (elems.has(A[i])) return A[i];
//     else elems.add(A[i]);
//   }
// }
// var repeatedNTimes = function(A) {
//   var N = A.length / 2;
//   for (var i = 0; i < A.length - 1; i++) {
//     if (A.indexOf(A[i], N) >= 0) return A[i];
//   }
// }

function flipAndInvertImage(A) {
  // First flip image horizontally
  let flipped = A.map(subArr => subArr.reverse());

  // Invert image where 0's replaced by 1's and vice versa -- helper method?
  // invertImage(); for each..?
  return flipped.map(el => invertImage(el));
};

function invertImage(A) {
  return A.map(el => {
    if (el === 1) return el = 0;
    else if (el === 0) return el = 1;
  });
};

// Time complexity: O(n^2) because we do a 2nd .map and within it we call the invertImage which is O(n)
// Space complexity: O(n) because flipped depends on input size

// console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])); // => [[1,0,0],[0,1,0],[1,1,1]]
// console.log(invertImage([0, 1, 1])); //  => [1, 0, 0]

// Alternative solutions:
// var flipAndInvertImage = function(A) {
//   return A.map(subArr => subArr.reverse().map(subEl => subEl^1));
// };
// var flipAndInvertImage = function(A) {
//   let reversed = A.map((currArray, index) => {
//     return currArray.reverse();
//   })

//   for (let i = 0; i < reversed.length; i++) {
//     for (let j = 0; j < reversed[i].length; j++) {
//       if (reversed[i][j] === 1) {
//         reversed[i][j] = 0;
//       } else {
//         reversed[i][j] = 1;
//       }
//     }
//   }
//   return reversed;
// };
// console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])); // => [[1,0,0],[0,1,0],[1,1,1]]

// function luckyNumbers(matrix) {
//   // We return an array of lucky numbers
//   let smallestInRowArr = [];
//   let biggestInColArr = [];
//   // Iterate with nested loops to eye out each element
//   // First check if element is smallest in its row -- helper method?
//   //  -smallestInRow(el, arr);
//   // Then check if element is biggest in its column, *transpose* then same helper method?
//   //  -biggestInRow(el,e arr);

//   let currentEl;
//   let smallest;
//   matrix.forEach(subArr => {
//     // First check if each el in subArr is smallest in row
//     subArr.forEach(el => {
//       smallest = false;
//       currentEl = el;
//       if (smallestInRow(el, subArr)) smallest = true;
//       if (smallest === true) smallestInRowArr.push(currentEl);
//     })
//   })

//   let biggest;
//   let transposed = transpose(matrix);
//   transposed.forEach(subArr => {
//     subArr.forEach(el => {
//       biggest = false;
//       currentEl = el;
//       if (biggestInRow(el, subArr)) biggest = true;
//       if (biggest === true) biggestInColArr.push(currentEl);
//     })
//   })

//   return smallestInRowArr.filter(el => biggestInColArr.includes(el));
// };

// function smallestInRow(el, arr) {
//   return arr.every(subEl => subEl >= el);
// }

// function biggestInRow(el, arr) {
//   return arr.every(subEl => subEl <= el);
// }

// const transpose = function (grid) {
//   let transposed = [];
//   grid.forEach((row, i) => {
//     let newRow = [];
//     for (let j = 0; j < grid.length; j++) {
//       newRow.push(grid[j][i]);
//     }
//     transposed.push(newRow);
//   });
//   return transposed;
// }

// console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]])); // => 15
// console.log(transpose([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]));
// Rules state lucky number is an element that is min of its row and max of its col
// [
//   [3, 7, 8],
//   [9, 11, 13],
//   [15, 16, 17]
// ]
// console.log(smallestInRow(15, [15, 16, 17])); // => true
// console.log(biggestInRow(15, [15, 16, 17])); // => false
// console.log(transpose([[3, 7, 8], [9, 11, 13], [15, 16, 17]])); // => [[3, 9, 15], [7, 11, 16], [8, 13, 17]]

// Add working solutions:
// var luckyNumbers = function(matrix) {
//   const rowHash = {};
//   const colHash = {};
//   const answer = [];

//   for (let i = 0; i < matrix.length; i++) {
//     rowHash[i] = matrix[i][0]
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] < rowHash[i]) {
//         rowHash[i] = matrix[i][j]
//       };
//       if (colHash[j]) {
//         if (matrix[i][j] > colHash[j].val) {
//           colHash[j] = {val: matrix[i][j], row: i}
//         }
//       } else {
//         colHash[j] = {val: matrix[0][j], row: [i]}
//       }
//     }
//   }
//   console.log('rowHash', rowHash);
//   console.log('colHash', colHash);

//   for (let colVal in colHash) {
//     console.log('--------');
//     console.log('colVal:', colVal);
//     console.log('Left:', colHash[colVal].val);
//     console.log('Right:', rowHash[colHash[colVal].row]);
//     if (colHash[colVal].val === rowHash[colHash[colVal].row]) {
//       answer.push(colHash[colVal].val);
//     }
//   }
//   return answer;
// };

// var luckyNumbers = function(matrix) {
//   let happyArr = [];
//   const cLen = matrix.length;
//   const rLen = matrix[i].length;

//   for (let i = 0; i < cLen; i++) {
//     outer:
//     for (let j = 0; j < rLen; j++) {
//       const currEl = matrix[i][j];

//       for (let c = 0; c < cLen; c++) {
//         if (c !== i && currEl < matrix[c][j]) continue outer;
//       }
//       for (let r = 0; r < rLen; r++) {
//         if (r !== j && currEl > matrix[i][r]) continue outer;
//       }

//       happyArr.push(currEl);
//     }
//   }
//   return happyArr;
// }

function balancedStringSplit(str) {
  // I need a way to split the string and check when all is equal
  // Dividing into substrings is a must
  // Counting left and right letters in substr, and if they match possibly I can use this
  // Have a bigger counter that counts total number and is returned at the end 
  // Helper method to test string count? -- Return boolean
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (RAndLCount(str.slice(i, j + 1))) {
        arr.push(str.slice(i, j + 1))
        i = j + 1;
      }
    }
  }
  
  return arr.length;
};

function RAndLCount(str) {
  let countHashObj = {};
  for (let char of str) {
    if (countHashObj[char]) countHashObj[char] += 1;
    else countHashObj[char] = 1;
  };
  if (Object.values(countHashObj)[0] === Object.values(countHashObj)[1]) return true;
  return false;
};

// Time complexity: O(n^3) because of nested loops and helper method nested iteration call
// Space complexity: O(nlogn) because arr size depends on inputs

// console.log(balancedStringSplit("RLRRLLRLRL")); // => 4
// console.log(RAndLCount("RL")); // => True

// Alternative Solutions:
// var balancedStringSplit = function(s) {
//   let matches = 0;
//   let balance = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "R") {
//       balance -= 1;
//     } else if (s[i] === "L") {
//       balance += 1;
//     } 

//     if (balance === 0) {
//       matches += 1;
//     }
//   }

//   return matches;
// }
// var balancedStringSplit = function(s) {
//   let matches = 0;
//   const stack = [];

//   stack.push(s[0]);

//   for (let i = 1; i < s.length; i++) {
//     const top = stack[stack.length - 1];

//     if (top !== undefined && top !== s[i]) {
//       stack.pop();
//     } else {
//       stack.push(s[i])
//     }

//     if (stack.length === 0) {
//       matches += 1;
//     }
//   }

//   return matches;
// };

function freqAlphabets(s) {
  let charMapping = {
    '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h', '9': 'i',
    '10#': 'j', '11#': 'k', '12#': 'l', '13#': 'm', '14#': 'n', '15#': 'o', '16#': 'p',
    '17#': 'q', '18#': 'r', '19#': 's', '20#': 't', '21#': 'u', '22#': 'v', '23#': 'w', 
    '24#': 'x', '25#': 'y', '26#': 'z',
  }

  let splitNums = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      splitNums.push(s.slice(i, i + 3));
      i = i + 2;
    } else {
      splitNums.push(s[i]);
    }
  }

  return splitNums.map(numStr => charMapping[numStr]).join('');
};

// Time complexity: O(n) because we iterate but never nested
// Space complexity: O(n) because splitNum size worst case could be all numbers less than 9 so dependant on input size

// console.log(freqAlphabets("10#11#12")); // => "jkab" 
// Alternative Methods:
// const map = { "1": "a", "2": "b", "3": "c", "4": "d", "5": "e", "6": "f", "7": "g", "8": "h", "9": "i", "10": "j", "11": "k", "12": "l", "13": "m", "14": "n", "15": "o", "16": "p", "17": "q", "18": "r", "19": "s", "20": "t", "21": "u", "22": "v", "23": "w", "24": "x", "25": "y", "26": "z" };
// const freqAlphabets = s => {
//   const stack = [];
//   for (const char of s) {
//     if (char !== '#') { stack.push(char); continue; }
//     const digit = stack.pop();
//     stack.push(map[(stack.pop() + digit)]);
//   }
//   let ret = '';
//   for (const char of stack) {
//     ret += char <= '9' ? map[char] : char;
//   };
//   return ret;
// };
// const freqAlphabets = s => {
//   let ret = '';
//   for (let i = 0; i < s.length; ++i) {
//     ret += map[s[i + 2] === '#' ? (i += 2, s[i - 2] + s[i - 1]) : s[i]];
//   }
//   return ret;
// };
// const freqAlphabets = s => s.replace(/(\d\d#|\d)/g, t => map[t.length === 3 ? t[0] + t[1] : t]);

const judgeCircle = moves => {
  let movesObj = { "L": 0, "R": 0, "U": 0, "D": 0 };
  for (let char of moves) {
    movesObj[char]++;
  }
  if ((movesObj["L"] + -Math.abs(movesObj["R"]) === 0) && (movesObj["U"] + -Math.abs(movesObj["D"]) === 0)) {
    return true
  }
  return false;
};

// Time complexity: O(n) because we iterate through the moves String
// Space complexity: O(C) because we are only ever tracking 4 chars in movesObj

// console.log(judgeCircle("UD")); // => true
// console.log(judgeCircle("LL")); // => false
// Alternative Solutions:
// const judgeCircle = (moves) => {
//   return moves.split('')
//     .reduce((p, m) => [p[0] + (m === 'R') - (m === 'L'), p[1] + (m === 'U') - (m === 'D')], [0, 0])
//     .join('') === '00';
// };
// var judgeCircle = function(moves) {
//   let x = 0, y = 0;
//   for (let i = 0; i < moves.length; i++) {
//     switch (moves[i]) {
//       case 'R':
//         x++;
//         break;
//       case 'L':
//         x--;
//         break;
//       case 'U':
//         y++;
//         break;
//       case 'D':
//         y--;
//         break;
//     }
//   }
//   return x === 0 && y === 0;
// };

function sortedSquares(A) {
  return A.map(n => Math.abs(n) * Math.abs(n)).sort((a, b) => a - b);
};
// Time complexity: O(n) because of iteration and sorting
// Space complexity: O(C) because no space is used just manipulated

// console.log(sortedSquares([-4, -1, 0, 3, 10])); // => [0,1,9,16,100]
// Alternative Solutions:
// var sortedSquares = function(A) {
//   const len = A.length;
//   const squares = Array(len);
//   let start = 0;
//   let end = len - 1;

//   for (let i = end; i >= 0; i--) {
//     const sq1 = A[start] ** 2;
//     const sq2 = a[end] ** 2;

//     if (sq1 > sq2) {
//       squares[i] = sq1;
//       start++;
//     } else {
//       squares[i] = sq2;
//       end--;
//     }
//   }

//   return squares;
// };

// var sortedSquares = function(A) {
//   let result = [];
//   let l = 0;
//   let r = A.length - 1;
//   let p = r;

//   while (l <= r) {
//     if (A[l] ** 2 > A[r] ** 2) {
//       result[p--] = A[l++] ** 2;
//     } else {
//       result[p--] = A[r--] ** 2;
//     }
//   }

//   return result;
// }

// var sortedSquares = function (A) {
//   A = A.map(x => x * x);
//   A.sort((a, b) => a - b);

//   return A;
// };

function numUniqueEmails(emails) {
  let emailSet = new Set();
  emails.forEach(email => { // O(n)
    let newEmail = '';
    let localName = email.slice(0, email.indexOf("@"));
    let domainName = email.slice(email.indexOf("@"));

    localName = localName.split("").map(char => { // O(n^2)
      if (char === ".") return "";
      else return char;
    }).join("");

    if (localName.includes("+")) {
      localName = localName.slice(0, localName.indexOf("+"));
    };

    newEmail += localName + domainName;

    emailSet.add(newEmail);
  });

  return emailSet.size;
};

// Time Complexity: O(n^2) because of nested loops
// Space Complexity: O(n) because worst case it adds all letters

// console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"])); // => 2

// Alternative Solutions:
// var numUniqueEmails = function(emails) {
//   return (new Set(emails.map(email => {
//     const [local, domain] = email.split('@');
//     return local.split('+').shift().split('.').join('') + '@' + domain;
//   }))).size;
// };
// var numUniqueEmails = function(emails) {
//   const r = /(\.(?=[^@]+@))|(\+.+(?=@))/g;
//   return new Set(emails.map((item) => {
//     return item.replace(r, '');
//   })).size;
// };
// var numUniqueEmails = function(emails) {
//   return emails.reduce((s, e) => s.add(e.replace(/(\+.*(?=@)|(\.(?=.*@)))/g, '')), new Set()).size;
// };

function reverseString(s) {
  for (let i = 0; i < Math.ceil(s.length / 2); i++) {
    [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
  };
  return s
};

// Time Complexity: O(n) because of our for loop
// Space Copmplexity: O(C) because the same input array is modified

// console.log(reverseString(["h", "e", "l", "l", "o"])); // => ["o","l","l","e","h"]

// Alternative Solutions:
// var reverseString = function(s) {
//   let i = 0, j = s.lenght - 1;
//   while (i < j) {
//     [s[i], s[j]] = [s[j], s[i]];
//     i++;
//     j--;
//   };
// };
// var reverseString = function(s) {
//   if (s.length === 1) return s;
//   let p1 = Math.floor(s.length / 2) - 1;
//   let p2 = s.length % 2 === 0 ? Math.floor(s.length / 2) : Math.floor(s.length / 2) + 1;
//   while (p1 > 0) {
//     [s[p1], s[p2]] = [s[p2], s[p1]];
//     p1--;
//     p2++;
//   }
//   return s;
// };
// var reverseString = function(s) {
//   let len = s.length;
//   if (!len || len === 1) return s;
//   let l = 0, r = len - 1;
//   while (l <= r) {
//     let temp = s[l];
//     s[l] = s[r];
//     s[r] = temp;
//     l++;
//     r--;
//   };
// };

function findLucky(arr) {
  let luckyNumber = -1;
  let numberCount = {};

  arr.forEach(el => {
    if (numberCount[el]) numberCount[el] += 1;
    else numberCount[el] = 1;
  });

  for (let key in numberCount) {
    if (numberCount[key] === parseInt(key) && parseInt(key) > luckyNumber) luckyNumber = key; 
  };

  return luckyNumber
};

// Time Complexity: O(n) because of looping
// Space Complexity: O(n) because of numberCount object size dependant on array worst case

// console.log(findLucky([2, 2, 3, 4])); // => 2

// Alternative Solutions:
// var findLucky = function(arr) {
//   const map = new Map();
//   for (x of arr) {
//     map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
//   };
//   return Math.max(...arr.filter(e => map.get(e) === e), -1);
// }
// var findLucky = function(arr) {
//   let table = new Map();
//   let resultArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (table.has(arr[i])) table.set(arr[i], table.get(arr[i]) + 1);
//     if (!table.has(arr[i])) table.set(arr[i], 1);
//   };

//   [...table].forEach(el => el[0] === el[1] ? resultArr.push(el[0]) : "");

//   return resultArr.length === 1 ? resultArr[0] 
//   : resultArr.length === 0 ? -1
//   : Math.max(...resultArr); 
// }
// var findLucky = arr => [...arr.reduce((hash, num) => hash.set(num, hash.get(num) + 1 || 1), new Map()).entries()].reduce((res, [key, val]) => res = key === val ? Math.max(res, val) : res, -1);

function fib(N) {
  if (N === 0) return 0;
  else if (N === 1) return 1;

  return fib(N - 1) + fib(N - 2);
};

// Time Complexity: O(2^n) because of fib stacks
// Space Complexity: O(n) because of fib stacks

// console.log(fib(2)); // => 1;

// Alternative Solutions:
// var fib = function(N) {
//   let memo = new Array(N + 1)
//   memo[0] = 0;
//   memo[1] = 1;
//   for (let i = 2; i <= N; i++) {
//     memo[i] = memo[i - 1] + memo[i - 2];
//   };
//   return memo[N];
// }
// var fib = function(N) {
//   for (var A = 0, B = 1, i = 2; i <= N; i++) [A, B] = [B, A + B];
//   return N < 2 ? N : B;
// };
// var fib = function(N) {
//   if (N === 0 || N === 1) return N;

//   let a = 0;
//   let b = 1;
//   let c;

//   while (N > 1) {
//     N--;
//     c = a + b;
//     a = b;
//     b = c;
//   };

//   return b;
// };

function relativeSortArray(arr1, arr2) {
  // Initial naive thoughts are I can make a new array var, quickly scan arr2 for elements and push all matching ones
  //  into new the arr from arr1

  let sortedArr = [];

  // Options are to do a nested loops and check all el against el in arr 2 OR
  // I can just create a hash map with a count in the correct order
  // Second idea still leads to O(n^2) runtime due to nested looping, but I like it because it'll be easier to keep track of count

  let eleCount = new Map();

  arr1.forEach(el => { // O(n)
    if (eleCount.has(el)) eleCount.set(el, eleCount.get(el) + 1);
    else eleCount.set(el, 1);
  });

  arr2.forEach(el => { // O(n)
    if (eleCount.has(el)) { // O(C)
      for (let i = 0; i < eleCount.get(el); i++) { // O(n)
        sortedArr.push(el);
      };
    };
  });

  arr1.sort((a, b) => a - b).forEach(el => { // O(n)
    if (!sortedArr.includes(el)) {
      for (let i = 0; i < eleCount.get(el); i++) { // O(n)
        sortedArr.push(el);
      };
    };
  });

  return sortedArr;
};

// Time Complexity: O(n^2) because of nesting
// Space Complexity: O(n) due to use of Map

// console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])); // => [22,28,8,6,17,44]
// console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])); // => [22,28,8,6,17,44]

// Additional Solutions:
// var relativeSortArray = function(arr1, arr2) {
//   const countMapping = {};
//   const solArr = [];
//   const restArr = [];

//   for (const val of arr2) {
//     countMapping[val] = 0;
//   };

//   for (const val of arr1) {
//     if (countMapping[val] >= 0) {
//       countMapping[val]++;
//     } else {
//       restArr.push(val);
//     };
//   };

//   for (const val of arr2) {
//     for (let i = 0; i < countMapping[val]; i++) {
//       solArr.push(val);
//     };
//   };

//   return [...solArr, ...restArr.sort((a, b) => a > b ? 1 : -1)];
// };
// var relativeSortArray = function(arr1, arr2) {
//   const lookup = new Map();
//   const N = arr2.length;
//   arr2.forEach((a, i) => {
//     lookup.set(a, i);
//   });
//   return arr1.sort((a, b) => {
//     a = lookup.has(a) ? lookup.get(a) : N + a;
//     b = lookup.has(b) ? lookup.get(b) : N + b;
//     return a - b;
//   });
// };
// var relativeSortArray = function(arr1, arr2) {
//   let h = {};
//   for (let i = 0; i < arr2.length; i++) h[arr2[i]] = 1;
//   for (const i of arr1) if (!(i in h)) h[i] = 1000 + 1;
//   arr1.sort((a, b) => h[a] - h[b]);
//   return arr1;
// };

// function singleNumber(arr) {
//   let countObj = {};
//   arr.forEach(el => {
//     if (countObj[el]) countObj[el]++;
//     else countObj[el] = 1;
//   });
//   for (let key in countObj) {
//     if (countObj[key] === 1) return key;
//   };
// };

// Time Complexity: O(n) because of a single loop
// Space Complexity: O(n) because of object creation

// console.log(singleNumber([2, 2, 1])); // => 1;

// Additional Solutions:
// function singleNumber(nums) {
//   return nums.reduce((prev, curr) => prev ^ curr, 0);
// }
// function singleNumber(nums) {
//   const map = {};
//   for (let n of nums) {
//     if (map[n] == null) map[n] = 0;
//     map[n]++;
//   };

//   for (let n in map) {
//     if (map[n] === 1) return Number(n);
//   };
// };
// function singleNumber(nums) {
//   let num = 0;
//   for (let n of nums) {
//     num ^= n;
//   };
//   return num;
// }

function transpose(A) {
  let transposed = [];

  A[0].forEach((row, idx1) => {
    let newRow = [];

    A.forEach((col, idx2) => {
      newRow.push(A[idx2][idx1])
    });

    transposed.push(newRow);
  });

  return transposed;
};

// Time Complexity: O(n^2) due to nested loops
// Space Complexity: O(n) because transposed and newRow size is dependent on input

// console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // => [[1,4,7],[2,5,8],[3,6,9]]
// console.log(transpose([[1, 2, 3], [4, 5, 6]])); // => [[1,4],[2,5]]

// Alternative Solutions:
// var transpose = function(A) {
//   return A[0].map((_, i) => A.map(b => b[i]));
// };
// var transpose = function(A) {
//   let result = [];
//   let rowLen = A.length;
//   let colLen = A[0].length;
//   for(let i = 0; i < rowLen; i++) {
//     for (let j = 0; j < colLen; j++) {
//       if (!result[j]) result[j] = [];
//       result [j][i] = A[i][j];
//     };
//   };
//   return result;
// }
// var transpose = function(A) {
//   let result = [];
//   A.forEach((el, i) => {
//     el.forEach((elIn, iIn) => {
//       if (i === 0) {
//         result.push([elIn]);
//       } else result[iIn].push(elIn);
//     });
//   });
//   return result;
// };

function findWords(words) {
  // Initial thoughts and naive solution approach is map all keys on a row to a obj hash
  // Then check if every word matches a particular row, if so then return it else dont

  let matchingWords = [];
  let keyRows = {
    1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    3: ["Z", "X", "C", "V", "B", "N", "M"]
  };

  words.forEach(word => {
    for (key in keyRows) {
      let match = true;
      word.split('').forEach(char => {
        if (!keyRows[key].includes(char.toUpperCase())) match = false;
      });
      if (match) matchingWords.push(word);
    };
  });


  return matchingWords;
};

// Time Complexity: O(n^3) because of triple nesting
// Space Complexity: O(n) because all could be a match worst case

// console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // => ["Alaska", "Dad"]

// Alternative Solutions:
// var findWords = function(words) {
//   return words.filter((w) => {
//     if (
//       !/^[qwertyuiop]*$/i.test(w) &&
//       !/^[asdfghjkl]*$/i.test(w) &&
//       !/^[zxcvbnm]*$/i.test(w)
//     ) return false;

//     return true;
//   });
// };
// const LETTER_TO_ROW = {
//   q: 0, w: 0, e: 0, r: 0, t: 0, y: 0, u: 0, i: 0, o: 0, p: 0,
//   a: 1, s: 1, d: 1, f: 1, g: 1, h: 1, j: 1, k: 1, l: 1,
//   z: 2, x: 2, c: 2, v: 2, b: 2, n: 2, m: 2
// };
// var findWords = function(words) {
//   return words.filter(word => {
//     let isSameRow = true;
//     let row = LETTER_TO_ROW[word[0].toLowerCase()];
//     for (let i = 1; i < word.length; i++) {
//       if (LETTER_TO_ROW[word[i].toLowerCase()] !== row) {
//         isSameRow = false;
//         break;
//       };
//     };
//     return isSameRow;
//   });
// };
// var findWords = function(words) {
//   return words.filter(w => /^([qwertyuiop]+|[asdfghjkl]+|)$i.test(w));
// };

function findOcurrences(text, first, second) {
  // Initial thoughts is splitting text into an array and iterating over, if word matches first then check matching of second with one idx up,
  // if a match then add in third
  let result = [];
  let textArr = text.split(' ');

  for(let i = 0; i < textArr.length; i++) {
    if (textArr[i] === first && textArr[i + 1] === second && textArr[i + 2]) result.push(textArr[i + 2]);
  };

  return result;
};

// Time Complexity: O(n) because of single n + n loops
// Space Complexity: O(logn) because we only put in one word into result for every match to our inputs

// console.log(findOcurrences("alice is a good girl she is a good student", "a", "good")); // => ["girl","student"]
// console.log(findOcurrences("ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk",
// "lnlqhmaohv",
//   "ypkk")); // => ["ypkk","ypkk"]

// Alternative Solutions:
// var findOcurrences = function (text, first, second) {
//   let result = [];
//   text = text.split(" ");
  
//   for (let i = 0; i < text.length - 2; i++) {
//     if (text[i] === first && text[i + a] === second) result.push(text[i + 2]);
//   };

//   return result;
// };
// const findOcurrences = (text, first, second) => {
//   const regex = new RegExp(`(?<=\\b${first} ${second}\\s)\\w+`, 'g');
//   return text.match(regex) || [];
// };
// var findOcurrences = function (text, first, second) {
//   text = text.split(" ");
//   let res = [];
//   while (true) {
//     let idx1 = text.indexOf(first);
//     let idx2 = text.indexOf(second);
//     if (idx1 == -1 || idx2 == -1) break;
//     if (idx1 > idx2) text.splice(idx2, 1, "");
//     else if (idx2 - idx1 > 1) text.splice(idx1, 1, "");
//     else if (idx2 - idx1 == 1) {
//       if (text[idx2 + 1] !== undefined) res.push(text[idx2 + 1]);
//       text.splice(idx1, 1, "");
//       text.splice(idx2, 1, "");
//     };
//   };
//   return res;
// };

function islandPerimeter(grid) {
  let count = 0;
  grid.forEach((row, _idx1) => {
    row.forEach((col, idx2) => {
      if (col === 1) {
        if ((row[idx2 - 1]) === 0 ||
          (row[idx2 - 1]) === undefined
        ) count++;
        if ((row[idx2 + 1]) === 0 ||
          (row[idx2 + 1]) === undefined
        ) count ++;
      };
    });
  });
  
  let transposedGrid = grid[0].map((col, idx2) => grid.map((row, idx1) => row[idx2]));

  transposedGrid.forEach((row, _idx1) => {
    row.forEach((col, idx2) => {
      if (col === 1) {
        if ((row[idx2 - 1]) === 0 ||
          (row[idx2 - 1]) === undefined
        ) count++;
        if ((row[idx2 + 1]) === 0 ||
          (row[idx2 + 1]) === undefined
        ) count++;
      };
    });
  });

  return count;
};

// Time Complexity: O(n^2) because of nesting loops
// Space Complexity: O(n) because we make a transposed copy

// console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])); // => 16
// console.log(islandPerimeter([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
// [[0, 1, 0, 0],
//   [1, 1, 1, 0],
//   [0, 1, 0, 0],
//   [1, 1, 0, 0]]

// [
//   [0, 1, 0, 1],
//   [1, 1, 1, 1],
//   [0, 1, 0, 0],
//   [0, 0, 0, 0],
// ]

// Alternative Solutions:
// var islandPerimeter = function(grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;

//   var perimeter = 0;

//   for (var row = 0; row < rows; row++) {
//     for (var col = 0; col < cols; col++) {
//       if (!grid[row][col]) continue;

//       perimeter += 4;

//       if (row > 0 && grid[row - 1][col]) perimeter--;
//       if (col > 0 && grid[row[col - 1]]) perimeter --;
//       if (row < rows - 1 && grid[row + 1][col]) perimeter--;
//       if (col < cols - 1 && grid[row][col + 1]) perimeter--;
//     };
//   };

//   return perimeter;
// };
// const islandPerimter = (grid) => {
//   const rows = grid.length, columns = grid[0].length;
  
//   let count = 0;
//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < columns; col++) {
//       count += borders(grid, row, col);
//     };
//   };

//   return count;
// };
// const borders = (grid, row, col) => {
//   let count = 0;
//   if (grid[row][col] === 0) {
//     if (row > 0) count += grid[row - 1][col];
//     if (row < grid.length - 1) count += grid[row + 1][col];
//     if (col > 0) count += grid[row][col - 1];
//     if (col < grid[0].length - 1) count += grid[row][col + 1];
//   } else {
//     if (row === 0) count += 1;
//     if (row === grid.length - 1) count += 1;
//     if (col === 0) count += 1;
//     if (col === grid[0].length - 1) count += 1;
//   };

//   return count;
// }
// var islandPerimeter = function(grid) {
//   let per = 0;

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] == 1) per = per + check_all(i, j, grid);
//     };
//   };

//   return per;
// };
// function check_up(i, j, grid) {
//   if (i === 0) return 1
//   else return (grid[i - 1][j] - 1) ** 2;
// };
// function check_left(i, j, grid) {
//   if (j == 0) return 1;
//   else return (grid[i][j - 1] - 1) ** 2;
// };
// function check_right(i, j, grid) {
//   if (j == grid[0].length - 1) return 1;
//   else return (grid[i][j + 1] - 1) ** 2;
// };
// function check_down(i, j, grid) {
//   if (i == grid.length - 1) return 1;
//   else return (grid[i + 1][j] - 1) ** 2;
// };
// function check_all(i, j, grid) {
//   return check_up(i, j, grid) + check_left(i, j, grid) + check_right(i, j, grid) + check_down(i, j, grid);
// };

function countCharacters(words, chars) {
  // Naive solution is to iterate over array and check if it matches chars, if it does remove those chars and dd
  // el.length to a count

  let count = 0;


  words.forEach(word => {
    let matchingChars = 0;
    let newChars = chars;
    for (let char of word) {
      if (newChars.includes(char)) {
        ++matchingChars;
        let leftHalf = newChars.slice(0, newChars.indexOf(char));
        let rightHalf = newChars.slice(newChars.indexOf(char) + 1);
        newChars = leftHalf + rightHalf;
      }
    }
    if (matchingChars === word.length) {
      count += word.length;
    };
  });

  return count;
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach")); // => 6

// Alternative Solutions:
// const countCharacters = (words, chars) => (
//   words.reduce((cnt, word, idx) => {
//     for (const c of [...chars]) word = word.replace(c, '');
//     return cnt + (0 === word.length ? words[idx].length : 0);
//   }, 0)
// );
// var countCharacters = function(words, chars) {
//   return words.filter(word => {
//     let charsRemain = chars.split("");
//     let correctWord = true;

//     word.split('').forEach(letter => {
//       if (!correctWord) return;
//       if (charsRemain.includes(letter)) {
//         charsRemain.splice(charsRemain.indexOf(letter), 1);
//       } else {
//         correctWord = false;
//       };
//     });

//     return correctWord;
//   }).join('').length;
// };
// var countCharacters = function(words, chars) {
//   return words.reduce((acc, cur) => [...cur].every(char => chars.includes(char) && cur.match(new RegExp(`${char}`, 'g')).length <= chars.match(new RegExp(`${char}`, 'g')).length) ? acc + cur.length : acc, 0);
// }

function reverseInt(x) {
  if (x > 0) return parseInt(x.toString().split('').reverse().join(''));
  else return -parseInt(x.toString().split('').reverse().join(''));
};

// console.log(reverseInt(123)); // => 321
// console.log(reverseInt(-123)); // => -321

function countPrimes(n) {
  // https://leetcode.com/problems/count-primes/
}

// console.log(countPrimes(10)); // => 4

function createPackage(small, big, goal) { // 4, 1, 10
  let bigWeight = 5;
  let leftOver = goal; // 10

  let bigCount = big; // 1
  while (leftOver > 0 || bigCount > 0) {
    if (leftOver - bigWeight < 0) break;
    leftOver = leftOver - bigWeight
    bigCount--;
  }

  // Figure out how much total weight I have in big goal
  // Subtract that weight from the leftOver, if it ends up using it all up return 0

  // If leftOver weight has weight left, subtract small weight from it.
  // Cases:
  // Small weight is equal to leftOver, return small
  // Small weight is bigger than left Over
  // Small weight is less than left Over, return -1
  if (leftOver )
  if (leftOver - small === 0) return small;
  else if (leftOver > small) return -1;
  else return leftOver;
}

// console.log(createPackage(4, 1, 10));

// Please write a program that prints the numbers from 1 to 100. But for multiples 
// of three print “Research” instead of the number and for the multiples of five print 
// “Square”. For numbers which are multiples of both three and five print “Research Square”
// (note the space).*

function printNumsWithRules() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("Research Square");
    else if (i % 3 === 0) console.log("Research");
    else if (i % 5 === 0) console.log("Square");
    else console.log(i);
  }
};

// printNumsWithRules();

function judgeSquareSum(c) {
  // I know I take in a number
  // I know the 2 numbers I can multiply must be less than c
  // Nested loops might be a good naive approach
  // I will iterate from 1 - c adding 1 everytime

  // 1 * 1, 1 * 1
  // 1 * 1, 2 * 2
  // 1 * 1, 3 * 3
  // etc.

  // Naive approach:
  // for (let i = 0; i <= c; i++) { 
  //   for (let j = 0; j <= c; j++) { 
  //     if ((i * i) + (j * j) === c) return true; 
  //   };
  // };
  
  if (Math.trunc(Math.sqrt(c)) == Math.sqrt(c)) {
    return true;
  }
  
  for (let i = 0; i < Math.sqrt(c); i++) {
    let b = Math.trunc(Math.sqrt(c - i * i));
    if (b * b + i * i == c) {
      return true;
    };
  };

  return false;
};

// Time Complexity: O(logn) because we only iterate up to the square root of c
// Space complexity: O(logn) same reason as above for variable b

// console.log(judgeSquareSum(5)); // => True
// console.log(judgeSquareSum(3)); // => False
// console.log(judgeSquareSum(9)); // => True
// console.log(judgeSquareSum(1)); // => True

// function canPlaceFlowers(flowerbed, n) {
//   // I'm looking for a [1, 0, 1, 0, 1, 0] type situation to ensure
//   // my n flowers can be planted

//   // Brute force approach:
//   // Iterate over the array, if there are no adjacent 1's next to a 0 aka (i - 1 === 0) (i + 1 === 0)
//   // i can turn i = 1, and do n - 1
//   // if at the end n is 0, return true, else return false

//   if (n < 1) return true;

//   // let full = true;
//   // while (full) { 
//   //   for (let i = 0; i < flowerbed.length; i++) {
//   //     if (flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0 && flowerbed[i] === 0) {
//   //       flowerbed[i] = 1;
//   //       full = false;
//   //       n--;
//   //       if (n === 0) break;
//   //     }
//   //   }
//   // }

//   // O(N) solution
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (flowerbed[i] === 0) {
//       if ((flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined)
//         && (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)
//       ) {
//         flowerbed[i] = 1;
//         n--;
//         if (n < 1) break;
//       }
//     }
//   }

//   if (n === 0) return true;
//   else return false;
// };

// var canPlaceFlowers = function (flowerbed, n) {
//   let current = 0; const size = flowerbed.length;
//   for (var i = 0; i <= size; i++) {
//     if (i < size && flowerbed[i] == 0) {
//       current++;
//       if (i == 0) current++;
//       if (i == size - 1) current++;
//     } else {
//       n -= Math.trunc((current - 1) / 2);
//       if (n <= 0) return true;
//       current = 0;
//     }
//   }
//   return false;
// };

// Time complexity: O(n) because of single loop
// Space complexity: O(c) because no storage is dependant on input

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // => True
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // => False

function thirdMax(nums) {
  // Naive brute force approach is to iterate over the array and pick out the third number
  // If nums length isnt 3, then return the biggest inside num
  // otherwise we can pick out the third distinct number with a set tracking if its distinct

  // Instantiate var biggest [x]
  // If nums length less than 3, var biggest can become biggest after iterating and return [x]
  // Instantiate new set
  // Iterate over array and add to set as you go long, checking to make sure set does not include
  // The number you are on, 
    // -Figure out approach to constantly keep checking if set has a number, if it does go to the next one otherwise return that number
  // -- Side note, I may be able to filter out all elements that are not unique and then pick out the number from there depending on problem criteria

  let biggest = null;
  if (nums.length < 3) {
    for (let i = 0; i < nums.length; i++) {
      if (!biggest || nums[i] > biggest) biggest = nums[i];
    }
    return biggest;
  }

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (biggest !== nums[i]) { biggest = nums[i]; count++ };

    if (count === 3) break;
  }

  return biggest;
};

console.log(thirdMax([3, 2, 1])); // => 1
console.log(thirdMax([1, 2])); // => 2
console.log(thirdMax([2, 2, 3, 1])); // => 1
