const fs = require('fs');
const strArr = fs.readFileSync(0).toString().trim().split('\n').map((str)=>str.split(' ').join(''))

console.log(strArr[0] + strArr[1]);