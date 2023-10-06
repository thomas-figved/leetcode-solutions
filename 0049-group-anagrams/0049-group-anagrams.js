/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groups = [
      // {
      //   pattern: "", //the alphabetically sorted version of the anagram group
      //   words: [], //store the words here
      // }
    ];

    for(word of strs) {
      let pattern = word.split("").sort().join("")
      let found_flag = false;
      //check if a similar group already exists
      for(group of groups) {
        if(group.pattern == pattern) {
          //The group with a similar pattern exists, add it to the list
          group.words.push(word);
          found_flag = true;
        }
      }

      if(!found_flag) {
        //we didnt find any existing group, add a new one
        groups.push({pattern: pattern, words:[word]})
      }
    }

    return groups.map((group) => group.words);
};