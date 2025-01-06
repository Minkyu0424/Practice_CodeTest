const fs = require('fs');
const [num, ...scores] = fs.readFileSync(0).toString().trim().split('\n');
let passedCount = 0

scores.forEach((arr) => {
    const sum = arr.split(' ').map(Number).reduce((prev, curr) => prev + curr, 0);
    if ((sum / 4) >= 60) {
        console.log('pass');
        passedCount++;
    } else {
        console.log('fail');
    }
});

console.log(passedCount);