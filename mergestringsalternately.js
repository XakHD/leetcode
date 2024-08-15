// 1768. Merge Strings Alternately
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
 

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 
 //we define a function named mergeAlternately that takes two parameters, 
 //'word1' and 'word2'. These are the two strings we want to merge alternately
 var mergeAlternately = function(word1, word2) {

    //we initialize an empty string 'result' that will store the merged result of 'word1' and 'word2'
    let result = '';
    
    //Iterate with a single loop, use a 'for' loop to iterate through the strings
    //Math.max function, the loop runs up to the length of the longer strings 
    //('Math.max(word1.length, word2.length)'), this ensures we check every character in both strings.
    for(i = 0; i < Math.max(word1.length, word2.length); i++) {
    
     //add characters alternately, the first condition will check if the current 
     //index 'i' is within the bounds of 'word1'. If so, it appends the character at position 'i' in 'word1' to 'result'
     if( i < word1.length)result += word1[i];
    
      //the second condition checks if the current index 'i' is within the bounds of 'word2'. 
      //if so, it appends the character at position 'i' in 'word2' to 'result'
      // By appending from both strings in each iteration, we naturally alternate between them  
     if(i < word2.length)result += word2[i];
    
        //return the result which contains the merged characters for 'word1' and 'word2'
      }
    return result;
    }
    //Math.max is a static method that returns the largest of the numbers given as input parameters,
    // or - infinity if there are no parameters
    //The for statement creates a loop that consists of three optional expressions, 
    //enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement
    //) to be executed in the loop
    //example how for loop looks 
    //for (let i = 0; i < 9; i++) {
    //str = str + i;
    //}
    
    //Efficiency: Using a single loop to handle both strings reduces the complexity of the code
    // and minimizes the number of iterations needed.
    //Compact Logic: The condition checks inside the loop allow for direct handling of different lengths 
    //without additional logic outside the loop, streamlining the merging process.