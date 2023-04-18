/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        "]":"[",
        ")":'(',
        "}":'{'
    }
    for(i=0; i<s.length; i++){
       if(s[i] === '[' || s[i] === '{' || s[i] === '('){
           stack.push(s[i])
       } 
        if(s[i] === ']' || s[i] === '}' || s[i] === ')'){
            if(map[s[i]] === stack[stack.length-1]){
                stack.pop()
            } else{
                return false;
            }
        }
    }
    return stack.length === 0;;
};