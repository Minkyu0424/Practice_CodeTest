const fs = require('fs');
const rows = fs.readFileSync(0).toString().trim().split('\n');

let sum = 0;

for(let i=0; i<rows.length; i++){
    arr = rows[i].split(' ').map(Number)
    for(let j=0; j<=i; j++){
        sum+=arr[j];
    }
}

console.log(sum)