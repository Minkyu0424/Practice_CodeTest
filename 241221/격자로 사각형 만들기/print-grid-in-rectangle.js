const fs = require('fs');
let number = fs.readFileSync('/dev/stdin').toString();
const num = Number(number)
const arr2d = Array(Number(num)).fill(1).map(() => Array(Number(num)).fill(1));

for(let i=0; i<num; i++){
    for(let j=0; j<num; j++){
        if(i!==0 && j!==0){
            arr2d[i][j] = arr2d[i-1][j-1] + arr2d[i-1][j] + arr2d[i][j-1]
        }
    }
}

arr2d.map((arr)=>{
    console.log(arr.join(' '))
})


// 01 11 21 31 41
// 41 31 21 11 01

