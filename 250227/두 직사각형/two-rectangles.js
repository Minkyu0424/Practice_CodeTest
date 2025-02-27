const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

if(x1>a2) console.log('nonoverlapping')
else if(a1>x2) console.log('nonoverlapping')
else if(y1>b2) console.log('nonoverlapping')
else if(b1>y2) console.log('nonoverlapping')
else console.log('overlapping')