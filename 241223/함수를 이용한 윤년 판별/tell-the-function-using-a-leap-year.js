const fs = require("fs");
const num = fs.readFileSync("/dev/stdin").toString().trim();

const whichYear =(n)=>{
    if(n % 100===0&&n%400===0){
            console.log(true)
            return;
    }
    if(n%4===0){
        console.log(true)
            return;
    }
    console.log(false)
}

whichYear(num)