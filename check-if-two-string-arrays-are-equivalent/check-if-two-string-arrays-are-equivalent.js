/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let wordstr1 = word1.join('')
    let wordstr2 = word2.join('')
    
    return wordstr1 === wordstr2
};