const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split('\n');

const answer=[0,0,0,0];

for(i of arr){
    const [isCold, temp] = i.split(' ');

    if(isCold==='Y' && +temp >= 37) answer[0]+=1
    if(isCold==='N' && +temp >= 37) answer[1]+=1
    if(isCold==='Y' && +temp < 37) answer[2]+=1
    if(isCold==='N' && +temp < 37) answer[3]+=1
}

if(answer[0]>=2) answer.push('E');

console.log(answer.join(' '))