/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groups = {};
      // {
      //   pattern: "", //the alphabetically sorted version of the anagram group 
      //   words: [], //store the words here
      // }

    for(word of strs) {
      let pattern = word.split("").sort().join("")
      //check if a similar group already exists
      if(pattern in groups) {
        groups[pattern].push(word);
      }
      else {
        groups[pattern] = [word];
      }
    }

    return Object.values(groups);
};