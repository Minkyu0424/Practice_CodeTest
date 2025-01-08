const fs = require('fs');
const [cnt, nums] = fs.readFileSync(0).toString().trim().split('\n');

const sortArr = nums.split(' ').map(Number).sort((a,b)=> b-a);
console.log(`${sortArr[0]} ${sortArr[1]}`)

