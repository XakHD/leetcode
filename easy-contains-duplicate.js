// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// My Solution

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};

// this function works by creating a Set from the nums array to remove any duplicates, and then checking if any values were removed by compariny the size of the Set with the length of the nums array. If the sizes are not equal, that means there were duplicates in nums, so the function returns true, Ih the sizes are equal, that means there were no duplicates, so the function returns false.