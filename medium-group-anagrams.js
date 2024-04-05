// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

//My Solution

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()

    for (let str of strs) {
        let sorted = [...str].sort().join('');
        if (map.has(sorted)) {
            map.get(sorted).push(str);
        } else {
            map.set(sorted, [str]);
        }
    }
    return Array.from(map.values());
};

// this function works by iterating over the strs arrayand for each string, sorting the characters in the string and checking if the sorted string is in the map. If the sorted string is in the map, we add the original strijng to the array of anagrams for that sorted string. if the sorted string is not in the map, we add a new entry to the map with the sorted string as the key and an array containing the original string as the value, we return an array of the arrays of anagrams