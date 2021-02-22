/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxIndices = []
    let max = 0
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (max < nums[i] + nums[j]) {
                max = nums[i] + nums[j]
                maxIndices.splice(0)
                maxIndices.push(i, j)
            }
        }
    }
    
    return (nums[maxIndices[0]] - 1) * (nums[maxIndices[1]] - 1)
    
    
    
    //console.log(max, maxIndices)
};