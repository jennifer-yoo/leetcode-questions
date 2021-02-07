/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    // input is an array
    // output is number of "good" pairs, where nums[i] == nums[j], and i < j
    
    // check if two numbers in the array are equal
    // check if index(i) is < index(j)
    // track num of good pairs
    
    let pairs = 0
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                pairs ++
            }
        }
    }
    
    return pairs
};