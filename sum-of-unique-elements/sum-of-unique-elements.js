/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    // create tracker to find unique elements
    // add elements
    // return sum
    
    let numObj = {}
    let sum = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (!numObj[nums[i]]) {
            numObj[nums[i]] = 1
        } else {
            numObj[nums[i]] ++
        }
    }
   console.log(numObj)
    
    
    Object.keys(numObj).forEach(ele => {
        if (numObj[ele] === 1) {
            sum += parseInt(ele)
        }
    })
    
    return sum
    
};