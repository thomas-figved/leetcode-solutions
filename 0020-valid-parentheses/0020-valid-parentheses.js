/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const correspondances = {
        ")": "(",
        "}": "{",
        "]": "[",
    }

    if( [")", "}", "]"].includes(s.charAt(0))) {
        return false;
    }

    for(let i = 0; i < s.length; i++) {

        let currentChar = s.charAt(i);

        if(["(", "{", "["].includes(currentChar)) {
            stack.push(currentChar);
        } else if([")", "}", "]"].includes(currentChar)) {
            if(stack[stack.length-1] == correspondances[currentChar] ) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length == 0;
};