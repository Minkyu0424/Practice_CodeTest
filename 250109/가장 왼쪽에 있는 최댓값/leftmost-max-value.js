const fs = require('fs');
const [cnt, numbers] = fs.readFileSync(0).toString().trim().split('\n')

let point = cnt;
let numberArr =  numbers.split(' ').map(Number);
const answer=[]

while(true){
    const newArr = [...numberArr].sort((a, b) => b - a);
    const maxNum = newArr[0]
// console.log(maxNum,'최대치')

    const maxWhere = numberArr.findIndex((num)=> num === maxNum);
// console.log(maxWhere,'최대치 위치')
    
    if(maxWhere===0){
        answer.push(1);
        break;
    }
    answer.push(maxWhere+1);
    numberArr = numberArr.slice(0,maxWhere)
}

console.log(answer.join(' '))