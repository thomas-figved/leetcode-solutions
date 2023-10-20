/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length
    let maxPalindrome = s.substring(0,1)

    for(let i=0; i < len - maxPalindrome.length ; i++ ) {
      for(let j=i;j < len; j++) {
        let substr = s.substring(i, j+1)
        maxPalindrome = isPalindrome(substr) && substr.length > maxPalindrome.length ? substr : maxPalindrome
      }
    }

    return maxPalindrome
};

function isPalindrome(str){
  let start = 0
  let end = str.length -1
    while(start < end){
        if(str[start]!==str[end]) return false;
        start++,end--;
    }
    return true;
}