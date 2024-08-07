// 1071. Greatest Common Divisor of Strings
// Solved
// Easy
// Topics
// Companies
// Hint
// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

//My Solution


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    //check if the concatenations of str1+str2 and str2+str1 are equal.
    //this checks if str1 and str2 have a common pattern.
    if((str1 + str2) !== (str2 + str1)) {
        return "";
      }
     //get the lengths of both strings.
     let len1 = str1.length; //lengh of first string
     let len2 = str2.length; //length of second string 
    
     //Use the euclidean algorithm to find the GCD of the lengths
     //this loop continues until len2 becomes 0.
     while (len2 !== 0) {
        //temp hold the current value of len2
        let temp = len2;
        //len2 is updated to the remainded of len1 divided by len2
        len2 = len1 % len2;
        //len1 is updated to the value of temp
        len1 = temp;
     }
    
     //The GCD of the lenghts is now stored in len1
     //return the substring of str1 from the start to len1
     return str1.substring(0, len1);
    };