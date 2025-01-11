const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split('\n');
const [row, col] = arr[0].split(' ').map(Number);

for(let i=0; i<row; i++){
    const answer =[]
    const arr1 = arr[i+1].split(' ').map(Number);
    const arr2 = arr[i+row+1].split(' ').map(Number);

    for(let j=0; j<col; j++){
        const num = arr1[j] === arr2[j] ? 0 : 1
        answer.push(num);
    }
    
    console.log(answer.join(' '))
}