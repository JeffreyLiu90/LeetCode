// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
  let storage = {};
  // return nums.entries();

  // Iterating through every element of nums, extracting the index and actual number out for storage
  // if Storage exists
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};

const nums = [6, 7, 11, 2, 19];
const target = 9;

console.log(twoSum(nums, target));
