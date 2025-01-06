const fs = require('fs');
const num = +fs.readFileSync(0).toString().trim()

let sum = 1;
let swap=num;
const answer=[]

while(sum<100){
    answer.push(sum)
    sum+=swap;
    swap=sum;
}

console.log(answer.join(' '))