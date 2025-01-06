const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split('\n');

const me1 = a.split(' ').map((a)=>Number(a))
const me2 = b.split(' ').map((a)=>Number(a))

console.log(`${me1[0] > me2[0] && me1[1] > me2[1] ? 1 : 0}`) 