/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0

    //if the string is not empty or with only one letter
    if(s.length <= 1) {
        result = s.length;
    } else {
        //we set two pointers to do a sliding window
        let left = 0;
        let right = 1;

        //this set will be filled with different characters of s
        let repeating_characters = new Set();
        repeating_characters.add(s.substring(left, left+1));

        while(right < s.length) {
            let right_char = s.substring(right, right+1);

            //if the right character is already in the repeating_characters
            if(repeating_characters.has(right_char)) {
                //then we remove the char pointed by left from the reapeating characters and we move it to the right
                repeating_characters.delete(s.substring(left, left+1));
                left++;
            } else {
                //otherwise we add the char pointed by the right pointer to the array
                repeating_characters.add(right_char);
                right++;
            }

            //if the repeating characters set is bigger than our current result, update the result
            if(repeating_characters.size > result) {
                result = repeating_characters.size
            }
        }
    }

    return result;

};