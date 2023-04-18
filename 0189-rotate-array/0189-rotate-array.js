/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    k = k % nums.length 
    
    let spliced = nums.splice(nums.length-k)
    return nums.splice(0, 0, ...spliced)
}