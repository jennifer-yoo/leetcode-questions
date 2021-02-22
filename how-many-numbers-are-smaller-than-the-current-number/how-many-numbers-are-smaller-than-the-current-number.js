/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let count = 0
    let currentNum = 0
    let arr = []
    
    for (let i = 0; i < nums.length; i++) {
        currentNum = nums[i]
        
        for (let j = 0; j < nums.length; j++) {
            if (currentNum > nums[j]) count ++ 
        }
        
        arr.push(count)
        count = 0
    }
    return arr    
};