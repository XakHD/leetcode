// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

//My Solution 

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    
    // Mapping of digits to letters
    const mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const combinations = [];

    function backtrack(combination, nextDigits) {
        // If there are no more digits to check
        if (nextDigits.length === 0) {
            // The combination is complete
            combinations.push(combination);
        } else {
            // Iterate over all letters which the current digit maps to
            const letters = mapping[nextDigits[0]];
            for (let i = 0; i < letters.length; i++) {
                // Append the current letter to the combination and proceed to the next digits
                backtrack(combination + letters[i], nextDigits.substring(1));
            }
        }
    }

    backtrack('', digits);
    return combinations;
};
