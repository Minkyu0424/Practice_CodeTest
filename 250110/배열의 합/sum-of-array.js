const fs = require('fs');
const lines = fs.readFileSync(0).toString().trim().split('\n');
const sum=[];

for(let line of lines){
    const lineSum = line.split(' ').map(Number).reduce((acc, cur)=> acc+cur,0)
    console.log(lineSum)
}