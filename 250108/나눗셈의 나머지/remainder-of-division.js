const fs = require('fs');
let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const answer=[];
let sum = 0;

while(a>1){
    answer.push(a%b)
    a=Math.floor(a/b);
}
for(let i=0; i<b; i++){
    let rep = answer.filter((num)=> num === +i)
    sum=sum+(rep.length) ** 2
}
console.log(sum)