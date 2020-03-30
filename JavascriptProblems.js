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