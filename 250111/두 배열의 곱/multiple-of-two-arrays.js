const fs = require('fs');
const rows = fs.readFileSync(0).toString().trim().split('\n');

for(let i=0; i<3; i++){
    let answer = [];
    let arr1 = rows[i].split(' ').map(Number);
    let arr2 = rows[i+4].split(' ').map(Number);
    for(let j=0; j<3; j++){
        answer.push(arr1[j] * arr2[j])
    }
    console.log(answer.join(' '))
}

