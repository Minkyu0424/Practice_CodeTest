/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    const sortArr = (n+'').split('').sort((a,b)=>b-a);
    return Number(sortArr[0])*Number(sortArr[1])
};