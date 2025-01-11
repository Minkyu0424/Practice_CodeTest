const fs = require('fs');
const strArr = fs.readFileSync(0).toString().trim();

const answer =[]

    let before = strArr[0]
    let cnt=0;

    for(let letter of strArr){
        if(letter===before){
            cnt++;
        }else{
            answer.push(before)
            answer.push(cnt)
            cnt=1;
        }
        before = letter;
    }
    answer.push(before)
    answer.push(cnt)
    cnt=1;

console.log(answer.length)
console.log(answer.join(''))