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