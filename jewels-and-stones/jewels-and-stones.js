/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let obj = {}
    let count = 0
    
    for (let i = 0; i < stones.length; i++) {
        if (!obj[stones[i]]) {
            obj[stones[i]] = 1
        } else if (obj[stones[i]]) {
            obj[stones[i]] ++
        }
    }
    
    for (const [key, value] of Object.entries(obj)) {
        for (let i = 0; i < jewels.length; i++) {
            if (jewels[i] === key) {
                count += value
            }
        }
    }
    
    return count
};