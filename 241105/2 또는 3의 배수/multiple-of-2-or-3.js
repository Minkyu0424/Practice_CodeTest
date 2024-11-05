let fs = require('fs');
let num = Number(fs.readFileSync('/dev/stdin').toString());
let arr = [];

for (let i = 1; i <= num; i++) {
    (i % 2 === 0 || i % 3 === 0) ? arr.push(1) : arr.push(0);
}

console.log(arr.join(' '));