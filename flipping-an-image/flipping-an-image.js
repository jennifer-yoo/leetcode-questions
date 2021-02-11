/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    // create variable to create copy of matrix
    // iterate over array, decrementing
    // push elements from last index
    // iterate over array, incrementing
    // replace element (if 1, replace 0. if 0, replace 1)
    
//     let arr = []
//     let arrLength = 0
    
//     for (let i = 0; i < A.length; i++) {
//         //arr.push(A[i])
//         arrLength = A[i].length
//         for (let k = A[i].length - 1; A[i] > 0; k--) {
//             arr.push(A[i][k]) 
//         }
//     }
//     console.log(arr)
    
    return A.map(image => image.map(x => !x).reverse());

};