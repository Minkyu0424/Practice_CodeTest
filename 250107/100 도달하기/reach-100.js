const fs = require('fs');
const num = +fs.readFileSync(0).toString().trim()

let sum = 1;
let swap=num;
const answer=[1]

while(sum<100){
    sum+=swap;
    answer.push(sum)
    swap=sum;
}

console.log(answer.join(' '))