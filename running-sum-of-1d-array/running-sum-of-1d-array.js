/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    const addArray = (arr) => {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    }
    
    let arr = []
    let runningArr = []
    
    for (let i = 0; i < nums.length; i++) { 
        runningArr.push(nums[i])

        if (arr.length === 0) {
            arr.push(nums[i])   
        } else {
            arr.push(addArray(runningArr))
        }
    }
    
    return arr
};