/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    const arr = (x+'').split('');
    for(let i=0; i<arr.length/2; i++){
        if(arr[i] !== arr[arr.length-i-1]) return false
    }
    return true
};