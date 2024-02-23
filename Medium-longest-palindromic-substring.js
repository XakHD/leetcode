// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

//My Solution
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let dp = Array(n).fill(false).map(() => Array(n).fill(false));
    let start = 0, end = 0;
 
    for(let len = 1; len <= n; len++) {
        for (let i = 0; i <= n - len;i++) {
            let j = 1 + len - 1;
 
            if (len == 1){
                dp[i][j] = true;
            }else if (len == 2){
                dp[i][j] = (s[i] == s[j]);
            }else{
                dp[i][j] = (s[i] == s[j] && dp[i + 1][j - 1]);
            }
            if(dp[i][j] && len > end - start + 1){
                start = i;
                end = j;
            }
        }
    }
 
    return s.substring(start, end + 1);
 };