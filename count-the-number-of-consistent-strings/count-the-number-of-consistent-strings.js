/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0    
    let set = new Set(allowed.split(''));
    
    for (let word of words) {
        let flag = true;
        for (let char of word) {
            if (!set.has(char)) {
                flag = false;
                break;
            }
        }
        if (flag) count ++;
    }
    
    return count
};