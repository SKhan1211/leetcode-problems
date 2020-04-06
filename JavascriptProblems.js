// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1]

function twoSum(nums, target) { // [-1,-2,-3,-4,-5], -8
  let sums = []; 
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && j !== i) sums.push(...[i, j]) // 2 + 7 === 9, [].concat([0, 1])
    }
  }  

  return Array.from(new Set(sums));
}

// console.log(twoSum([2, 7, 11, 15], 9)); // => [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // => [1, 2]
// console.log(twoSum([-1, -2, -3, -4, -5], -8)); // => [2, 4]

// Given a string, find the length of the longest substring without repeating characters.
// Example 1:
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(str) { // "abcabcbb"
  if (!str.length) return 0;
  let longest = 0;
  let currentSubstr = '';

  for (let i = 0; i < str.length; i++) {
    currentSubstr = str.slice(i, i + 1)
    for (let j = i + 1; j < str.length; j++) {
      if (currentSubstr.includes(str[j])) {
        break
      }
      currentSubstr = str.slice(i, j + 1);
      if (currentSubstr.length > longest) longest = currentSubstr.length;
    }
  }
  
  return longest > 0 ? longest : 1; 
}

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

function smallerNumbersThanCurrent(nums) {
  // Initial strategy is that I can use a nested loop and a counter and push the counter at the end into new array

  let counter = 0;
  let counterArr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j] && i !== j) {
        counter += 1;
      }
    }
    counterArr.push(counter);
    counter = 0;
  }

  return counterArr;
}

// Time complexity is probably O(n^2) because of nested loops
// Space complexity is probably O(n) linear because the same variable is used and manipulated in loops

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // => [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // => [2,1,0,3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // => [0,0,0,0]