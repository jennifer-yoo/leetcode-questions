/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    if (s.length % 2 !== 0) {
        return false
    }
    
    const checkVowel = (letter) => {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

        for (let j = 0; j < vowels.length; j++) {
            if (letter === vowels[j]) {
                return true
            }
        }
    }
    
    let leftObj = {}
    let leftHalf = 0
    let rightObj = {}
    let rightHalf = 0
    
    for (let i = 0; i < s.length/2 ; i++) {
        if (!leftObj[s[i]] && checkVowel(s[i])) {
            leftObj[s[i]] = 1
            leftHalf ++
        } else if (leftObj[s[i]]) {
            leftObj[s[i]] ++
            leftHalf ++
        } 
    }
    
    for (let k = s.length/2; k < s.length ; k++) {
        if (!rightObj[s[k]] && checkVowel(s[k])) {
            rightObj[s[k]] = 1
            rightHalf ++
        } else if (rightObj[s[k]]) {
            rightObj[s[k]] ++
            rightHalf ++
        } 
    }
    
    return rightHalf === leftHalf
};