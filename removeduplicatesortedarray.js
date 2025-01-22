// 26. Remove Duplicates from Sorted Array
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number}
 */

//sort ascending order with array nums
//remove the duplicate in-place
//each unique should only appear once
//relative order of the elements should be kept same
//return the number of unique elements in nums
var removeDuplicates = function(nums) {
    //new Set(nums): Converts the array nums into a Set; which removes duplicates since Set only allows unique values
    //.sort((a,b) => a - b) - ensures that the unique elements are sorted.(in this case, the input is already sorted, so sorting isnt necessary)
    //this creates an array unique that contains all unique elements in sorted order
    const unique = Array.from(new Set(nums)).sort((a,b) => a - b);
    
//the for loop iterates through the unique array and overwrites the fisrt k elements of nums with the unique values
//this step ensures that the first k elements are updated with the required unique values
 for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
 }
 //since the unique array contains all unique elements, its length represents the number of unique elements(k)
return unique.length;
}
