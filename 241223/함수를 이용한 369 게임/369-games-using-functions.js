const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let answer = 0;

const isThree =(num) =>  num % 3 === 0

const isTsn =(num)=>{
     const digits = new Set(String(num));
    return digits.has('3') || digits.has('6') || digits.has('9');
}

for(let i=a; i<=b; i++){
    if(isThree(i) || isTsn(i)){
        answer++
    } 
}
    console.log(answer)
