const fs = require('fs');
const [num1,num2,num3] = fs.readFileSync(0).toString().trim().split('-')
const newNum = [num1,num3,num2]

console.log(newNum.join('-'))