// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

//My Solution

var generateParenthesis = function(n) {
    var result = [];
    generate("", 0, 0);
    return result;

    function generate(current, open, close) {
        if (current.length == 2 * n) {
            result.push(current);
            return;
        }
        if (open < n) {
            generate(current + "(", open + 1, close);
        }
        if (close < open) {
            generate(current + ")", open, close + 1);
        }
    }
};