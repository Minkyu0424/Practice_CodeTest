const fs = require('fs');
const answer = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let last1 = 0;
let last2 = 0;
answer.push(answer[0]*2 + answer[1])

for(let i=0; i<7; i++){
    let sum = answer.at(-1) + answer.at(-2) * 2
    answer.push(sum)
}

console.log(answer.join(' '))