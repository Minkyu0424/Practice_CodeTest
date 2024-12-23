const fs = require("fs");
const num = fs.readFileSync("/dev/stdin").toString().trim();

const whichYear =(n)=>{
    console.log(n%400!==0 && n%4===0)
}

whichYear(num)