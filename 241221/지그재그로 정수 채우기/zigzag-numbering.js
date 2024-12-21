const fs = require('fs');
let number = fs.readFileSync('/dev/stdin').toString().split(' ');
const col = Number(number[0])
const row = Number(number[1])
const arr2d = Array(Number(col)).fill(0).map(() => Array(Number(row)).fill(0));

for(let i=0; i<row; i++){
    if(i%2===0){
        for(let j=0; j<col; j++){
            arr2d[j][i] = col*i + j
        }
    }else{
        for(let j=0; j<col; j++){
            arr2d[j][i] = (col*(i+1)) - j-1
        }
    }
}

for(let i=0; i<col; i++){
    let arr=[]
    for(let j=0; j<row; j++){
        arr.push(arr2d[i][j])
    }
    console.log(arr.join(' '))
}



// 01 11 21 31 41
// 41 31 21 11 01
