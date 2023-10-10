// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// My Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
 /*
 nums = [1, 5 ,9]
target = 10
[0, 2]

i = 1
j = 2

2 5
5 2

time complexity = 0(N^2) -> 0(N)
space complexity = 0(1) - constant -> 0(N)

Hashmap

nums = [1 ,5, 9]
target = 10

map = {1: 0, 5: 1, }
i = 0
value = 5
complement_pair = 10 - 5 = 5
[0, 2]
map[1]

 */
var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0; i < nums.length; i++) {
     var value = nums[i];
     var complementPair = target - value;
     if(map[complementPair] !== undefined) {
         return [map[complementPair], i];
     }else {
         map[value] = i;
     }
           
    }
};