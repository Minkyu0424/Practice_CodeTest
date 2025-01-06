const fs = require('fs');
const a = fs.readFileSync(0).toString('').trim();

console.log((a * 30.48).toFixed(1))

