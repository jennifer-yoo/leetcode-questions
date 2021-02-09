/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let water = 0
    let maxNum = 0
    let maxIndex = 0
    let sum = 0
    
    
    //finds max number and index of max number in the array
    for (let j = 0; j < height.length; j++) {
        let prev = maxNum
        maxNum = Math.max(maxNum, height[j])
        if (prev !== maxNum) {
            maxIndex = j
        }
    }

    //iterates through the start to maxIndex of array
    // assigns start to height[0]
    // assigns start to height[i] if current element being iterated is greater than or equal to start
    // increments sum if current element is less than or equal to start
    let start
    for (let i = 0; i < maxIndex; i++) {  
        let currentNum = height[i]
        
        if (!start) { 
            // assigns start to height[0]
            start = height[i]
        } else if (currentNum >= start) {
            start = height[i]
        } else if (currentNum <= start) {
            sum += (start-height[i])
        }
    }
    
    //iterates from the end of the array to the index of maxNum
    // same logic as above
    let end
    for (let k = height.length - 1; k > maxIndex; k--) {
        let currentNum = height[k]
        
        if (!end) { 
        // assigns end to height[0]
            end = height[k]
        } else if (currentNum >= end) {
            end = height[k]
        } else if (currentNum <= end) {
            sum += (end-height[k])
        }
    }
    
    return sum
};