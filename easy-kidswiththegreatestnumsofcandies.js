// 1431. Kids With the Greatest Number of Candies
// Easy
// Topics
// Companies
// Hint
// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

 

// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// Example 2:

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false] 
// Explanation: There is only 1 extra candy.
// Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
// Example 3:

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]
 

// Constraints:

// n == candies.length
// 2 <= n <= 100
// 1 <= candies[i] <= 100
// 1 <= extraCandies <= 50


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

function kidsWithCandies(candies, extraCandies) {
    //First we create a result array of the same length as 'candies' and fill it with 'false' values. This array will later be updated with 'true' values where applicable
    let result = new Array(candies.length).fill(false);
    //next we need to determine the current maximum number of candies any kid has. WE can do this using the 'Math.max()' function combined with the spread operator to spread out the elements of the 'candies' array as arguments to 'Math.max()'
    let max = Math.max(...candies);
   
   // we then loop through each element in the 'candies' array, add 'extracandies' to it, and compare it to 'max'. If the result is greater than or equal to 'max', we set the corresponding element in the result array to 'true'.
   for(let i = 0; i < candies.length; i++) {
       if(candies[i] + extraCandies >= max) {
           result[i] = true;
       }
     }
     //finally we return the result array, which now contains 'true' or 'false' for each element in the 'candies' array based on whether adding 'extraCandies' can make it the maximum
     return result;
   };
   
   