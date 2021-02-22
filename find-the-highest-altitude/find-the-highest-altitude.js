/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    gain.unshift(0)
    
    let arr = []
    
    for (let i = 0; i < gain.length; i++) {
        if (i < 2) {
            arr.push(gain[i])    
        } else {
            arr.push(gain[i] + arr[i-1])
        } 
    }
    
    return arr.sort((a,b) => b-a)[0]
};