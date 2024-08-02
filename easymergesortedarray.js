// 88. Merge Sorted Array
// Easy
// Topics
// Companies
// Hint
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

// Constraints:


//Answer

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1; //last index of the non-zero elements in nums1
    let p2 = n - 1; //last index of nums2
    let p = m + n - 1; //last index of nums1(including zero-filled space)
  
    while (p1 >= 0 && p2 >= 0) {
      if (nums1[p1] > nums2[p2]) {
          nums1[p] = nums1[p1]; //Place the larger element from nums1 
          p1--; // move to the next element in nums1
      } else {
          nums1[p] = nums2[p2] // place the larger element from nums2
          p2--;// move to the next element in nums2
      }
      p--; //move the insertion point in nums1
    }
    while(p2 >= 0) {
      nums1[p] = nums2[p2]; //copy remaining elements from nums2 to nums1
      p2--; //move to the next element in nums2
      p--; //Move the insertion point in nums1
    }
  
     
  };