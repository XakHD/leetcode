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

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109
 

//My Solution
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//nums 1 has length of m + n
//m elements to be merged 
//n elements set to 0
// goal is to merge arrays such that nums 1 contains all elements in sorted order.
//p1 pointing to the end of m element in nums1
// p2 pointing to the end of elements in nums2
//p pointing to the end of nums1(which is m + n -1)


var merge = function(nums1, m, nums2, n) {
    //Initialize pointer
    let p1 = m - 1; //Pointer for nums1
    let p2 = n - 1; //Pointer for nums2
    let p = m + n -1; // Pointer for the end of merged array in nums1
 
    //Loop while there are elements to be processed in nums2
    while (p2 >= 0) {
     // If p1 is valid and nums1[p2] > nums2[p2], place nums1[p1] at nums1[p]
     if (p1 >= 0 && nums1[p1] > nums2[p2]) {
         nums1[p] = nums1[p1];
         p1--; // move p1 left
     } else {
       // otherwise, place nums2[p2] at nums1[p]
       nums1[p] = nums2[p2];
       p2--; //Move p2 left
     } 
     p--; //Move p left
    }
 };
 