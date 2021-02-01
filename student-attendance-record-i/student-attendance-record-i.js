/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    // true if does NOT have more than one A or more than two continous L
    let obj = {}
    
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 1
        } else if (obj[s[i]]) {
            obj[s[i]] ++
        }
        
        if (obj["A"] > 1) {
            return false
        }
        
        if (s[i] === "L" && s[i+1] === "L" && s[i+2] === "L") {
            return false
        }
    }
    
    return true
};