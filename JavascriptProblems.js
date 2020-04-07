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

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // => [4,0,1,1,3]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // => [2,1,0,3]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // => [0,0,0,0]

// Given an integer number n, return the difference between the product of its digits and 
//   the sum of its digits.

function subtractProductAndSum(n) {
  // Create 2 helper methods - productOfDigits, sumOfDigits
  // subtract the result of two and return
  return productOfDigits(n) - sumOfDigits(n);
}

function productOfDigits(n) { // 234 = 24
  // recursively call this method and return the product
  if (n < 10) return n;
  return (n % 10) * productOfDigits(Math.floor(n / 10));
}

function sumOfDigits(n) { // 234 = 9
  // recursively call this method and return the sum
  if (n < 10) return n;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// Time Complexity is likely O(n) because we open 2 recursive stacks, though they are not nested
// Space complexity is likely O(C) constant because we don't store anything into memory

// Constraints 1 <= n <= 10^5
// console.log(subtractProductAndSum(234)); // => 15
// console.log(subtractProductAndSum(4421)); // => 21

// Given a valid(IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

function defangIPaddr(address) {
  // Initial thought is to split on the ., join with [.]
  return address.split(".").join("[.]");
}

// Big-O time complexity is likely O(2n) = O(n) due to looping and splitting up elements into array, also joining
// Space complexity is O(c) because nothing is stored in memory

// console.log(defangIPaddr("1.1.1.1")); // => "1[.]1[.]1[.]1"
// console.log(defangIPaddr("255.100.50.0")); // => "255[.]100[.]50[.]0"

// Write a program that outputs the string representation of numbers from 1 to n.
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
// For numbers which are multiples of both three and five output “FizzBuzz”.

function fizzBuzz(n) {

}

console.log(fizzBuzz(15)); // => ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
