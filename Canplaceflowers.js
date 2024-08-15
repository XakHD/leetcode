// 605. Can Place Flowers
// Solved
// Easy
// Topics
// Companies
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

//My solution

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
//PREP
//Problem
// SO the problem is to determine if we can plant 'n' new flowers in a given flowerbed array without violating the rule that no flowers can be planted in adjacent plots. The flowerbed is represented as an array of 0s and 1s, where 0 means the plot is empty, and 1 means the plot is already occupied by a flower.
//Reasoning
//My approach to solving this problem is to iterate through the flowerbed array and check each plot to see if it is possible to plant a flower there. To plant a flower in a plot, I need to ensure that the current plot and its adjacent plots(if they exist) are all empty. If they are, I can safely plant a flower in the current plot and decrement the number of flowers I need to plant. I continue this process until either I have planted all the required Flowers or I have checked all the plots.
//Example
// For example, lets consider the flowerbed `[1,0,0,0,1]` with `n = 1` as i iterate through the flowerbed

// at index 0, the plot is already occupied, so i skip it

//at index 1, the plot is empty but the next plot at index 2 is also empty so i move on

//at index 2 both adjacent plots (index 1 and index 3) are empty so I can plant a flower here.
//Now that ive successfully planted 1 flower, and since `n` is reduced to 0, I can return `true` indicating its possible to plant the required number of flowers 

//PLAN
// so my plan is too loop through each plot in the flowerbed array.
//for each plot, check if it and its adjacent plots are empty.
//If i can plant a flower, update the flowerbed and reduce `n` by 1.
//After the loop, check if all required flowers have been--
//planted(`n <= 0`)
// return `true` if all flowers are planted, otherwise return `false`


// this line declares a function named `canPlaceFlowers` which takes two arguments: `flowerbed` (an array) and `n`(an integer)
var canPlaceFlowers = function(flowerbed, n) {
    //im going to start with a for loop to iterate over each plot in the `flowerbed` array. the loop runs from the first(`i = 0`) to the last plot (`i = flowerbed.length - 1`)
    for(i = 0; i < flowerbed.length; i++) {   
        //write an if statement that checks if we can plant a flower in the current plot (`flowerbed[i]`).
        // the conditions are" 1. `flowerbed[i-1] !== 1`: the plot before the current one should not have a flower. This condition is only valid if `i` is greater than `0`(were not at the first plot)
        //2. `flowerbed[i] !== 1`the current plot should be empty
        //3. `flowerbed[i+1] !== 1`': the plot after the current one should not have a flower. This condition is only valid if `i` is less than `flowerbed.length - 1`
        if(flowerbed[i-1] !== 1 && flowerbed[i] !== 1 && flowerbed[i+1] !== 1){   

         //If the `if` condition is satisfied, we plant a flower in the current plot by setting `flowerbed[i]` to `1`.
         //we then decrease `n` by `1` because weve successfully planted one flower.   
            flowerbed[i] = 1;
            n = n-1;
        }
    }

    //After the loop finishes, we check if `n` is less than or equal to `0`.
    //if `n <= 0`, it means we've planted all the flowers, so we return `true`
    //Otherwise, we return `false`, meaning it wasn't possible to plant all `n` flowers according to the rules.
  if (n <= 0) {
    return true
  } else {
    return false;
  }
};

//This approach ensures that we only plant flowers where its allowed, respecting the adjacency rule, and the time complexity is O(n) since we iterate through the flowerbed.