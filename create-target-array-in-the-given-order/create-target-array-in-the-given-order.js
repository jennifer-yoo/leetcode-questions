/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    // output to return new target array
    
    // insert element from nums to the index from index in target array 
    
    // iterate thru nums
    // iterate thru index
    // insert nums[i] at index[i]
    
    let targetArr = []
    
    for (let i = 0; i < nums.length; i++) {
        targetArr.splice(index[i], 0, nums[i])
    }
    
    return targetArr
};