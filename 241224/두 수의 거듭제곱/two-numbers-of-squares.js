const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let sum = a
for(let i=0; i<b; i++){
    sum=sum*a
}
console.log(sum)