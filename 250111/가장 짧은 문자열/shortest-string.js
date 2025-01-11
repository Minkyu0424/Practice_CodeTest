const fs = require('fs');
const strArr = fs.readFileSync(0).toString().trim().split('\n').map((str)=>str.length)

strArr.sort((a,b)=>a-b);
console.log(strArr[2] - strArr[0])
