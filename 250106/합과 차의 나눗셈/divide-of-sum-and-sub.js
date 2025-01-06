const fs = require('fs');
const [num1, num2] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

console.log(((num1+num2)/(num1-num2)).toFixed(2))