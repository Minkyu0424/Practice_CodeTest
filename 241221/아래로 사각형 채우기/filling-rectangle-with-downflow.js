const fs = require('fs');
let number = parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10); // 문자열을 숫자로 변환

const arr2d = Array.from({ length: number }, () => Array(number).fill(0));

for(let i=0; i<number; i++){
    for(j=0; j<number; j++){
        arr2d[j][i] = (j+1 + (i)*number)
    }
}

for (let row of arr2d) {
    let str = "";
    for (let elem of row) {
        str += elem + " ";
    }
    console.log(str);
}