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
// var twoSum = function(nums, target) {
//     var map = {};
//     for(var i = 0; i < nums.length; i++) {
//      var value = nums[i];
//      var complementPair = target - value;
//      if(map[complementPair] !== undefined) {
//          return [map[complementPair], i];
//      }else {
//          map[value] = i;
//      }
           
//     }
// }; 

// faster answer 

var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
};


// answer total breakdown 

// Problem Statement:
// Input: An array of integers nums and an integer target.
// Output: Indices of the two numbers such that they add up to target.
// Constraints:
// Each input has exactly one solution.
// You can't use the same element twice.
// The solution can be returned in any order.
// Understanding the Approach:
// Using a Map for Storage:

// A Map object in JavaScript stores key-value pairs.
// In this case, each number from the array nums is a key, and its index is the value.
// Iterating Through the Array:

// The array nums is iterated using a for loop.
// For each element in the array, you need to check if there's another number in the array that, when added to the current number, equals the target.
// Finding the Complement:

// For the current number nums[i], its complement is target - nums[i].
// This complement is the number we need to find in the rest of the array for the sum to be equal to target.
// Checking if the Complement Exists:

// The if statement checks whether the complement (target - nums[i]) already exists in the map.
// If it exists, it means we have found two numbers (nums[i] and target - nums[i]) that add up to the target.
// The map stores indices, so map.get(target - nums[i]) gives the index of the complement.
// Returning the Indices:

// If the complement is found, the function returns an array of two indices: [map.get(target - nums[i]), i].
// The first index is from the map (where the complement was found previously), and the second index is i (the current index in the loop).
// Storing the Current Number and Index in the Map:

// If the complement is not found in the map, the current number and its index are stored in the map with map.set(nums[i], i).
// This step is crucial because it adds the current number to the map, making it available for complement checks in subsequent iterations.
// The JavaScript Function:
// javascript
// Copy code
// var twoSum = function(nums, target) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(target - nums[i])) {
//             return [map.get(target - nums[i]), i];
//         }
//         map.set(nums[i], i);
//     }
// };
// Initializes a new Map.
// Iterates through each number in nums.
// For each number, checks if the map contains its complement.
// If the complement is found, returns the indices of the two numbers.
// If not found, adds the current number and its index to the map.
// Continues until a solution is found or the array is fully traversed.