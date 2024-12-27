const fs = require(`fs`);
const [start, end] = fs.readFileSync('/dev/stdin').toString().split(' ');
let sum = 0;

const isPossible = (num)=>{
    if(num%2===0) return false
    if(num%10===5) return false
    if(num%3===0 && num%9!==0) return false
    return true
}

for(let i=+start; i<=+end; i++){
    isPossible(i) && sum++
}

console.log(sum)
