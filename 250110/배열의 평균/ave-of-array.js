const fs = require('fs');
const [row1, row2] = fs.readFileSync(0).toString().trim().split('\n');
const row1Arr = row1.split(' ').map(Number)
const row2Arr = row2.split(' ').map(Number)

const rowMean1 = row1Arr.reduce((acc,cur)=>acc+cur,0)/4;
const rowMean2 = row2Arr.reduce((acc,cur)=>acc+cur,0)/4;

console.log(`${(rowMean1).toFixed(1)} ${(rowMean2).toFixed(1)}`)

const colAnswer=[];

for(let i=0; i<4; i++){
    colAnswer.push(((row1Arr[i]+row2Arr[i])/2).toFixed(1))
}
console.log(colAnswer.join(' '))

console.log(`${((rowMean1 + rowMean2)/2).toFixed(1)}`)
