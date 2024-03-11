// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

 

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
 

// Constraints:

// 1 <= s.length <= 20
// 1 <= p.length <= 20
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

//My Solution

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    //Create a 2D array to store the results of subproblems
    const dp = Array(s.length + 1).fill(null).map(() => Array(p.length + 1).fill(false));
 
    //Base case: empty string and empty pattern are a match
    dp[0][0] = true;
 
        // Handle patterns like a*, a*b*, etc.
     for (let j = 1; j <= p.length; j++) {
         if (p[j - 1] === '*') {
             dp[0][j] = dp[0][j - 2];
         }
     }
 
     // Fill the dp table
     for (let i = 1; i <= s.length; i++) {
         for (let j = 1; j <= p.length; j++) {
             // Case 1: Characters match or pattern character is '.'
             if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                 dp[i][j] = dp[i - 1][j - 1];
             }
             // Case 2: Pattern character is '*'
             else if (p[j - 1] === '*') {
                 // Two sub-cases:
                 // 2.1: Zero occurrences of the character before '*'
                 dp[i][j] = dp[i][j - 2];
 
                 // 2.2: One or more occurrences of the character before '*'
                 if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                     dp[i][j] = dp[i][j] || dp[i - 1][j];
                 }
             }
         }
     }
 
     return dp[s.length][p.length];
 };