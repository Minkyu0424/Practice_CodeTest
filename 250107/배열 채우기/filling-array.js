const arr =[];

const fs = require('fs');
const numArr = fs.readFileSync(0).toString().split(' ').map(Number).slice(0,10)

for(i of numArr){
 i!== 0 && arr.push(i)
}
console.log(arr.reverse.join(' '))

