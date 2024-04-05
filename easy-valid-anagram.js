// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

//My Solution

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if  (s.length !== t.length) {
     return false;
    }
    let counts = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
     counts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
     counts[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    for (let count of counts) {
     if (count !== 0) {
         return false;
     }
    }
    return true;
 };

 // this function works by counting the occurences of each letter in s and t and comparing these counts. If the counts are the same for all letters, s and t are anagrams, so the function returns true. if the counts are not the same for any letter, s and t are not anagrams, so the function returns false.