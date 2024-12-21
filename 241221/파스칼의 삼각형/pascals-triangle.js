const fs = require('fs');
let num = fs.readFileSync('/dev/stdin').toString()
const col = Number(num)
const arr2d = Array(Number(col)).fill(0).map(() => Array(Number(col)).fill(0));

for(let i=0; i<col; i++){
    for(let j=0; j<=col; j++){
        if(i===j){
            arr2d[i][j] = 1 
            break;
        }else if(j===0){
            arr2d[i][j] = 1 
        }
        else{
            arr2d[i][j] = arr2d[i-1][j-1] + arr2d[i-1][j]
        }
    }
}

arr2d.map((arr)=>{
    const filArr = arr.filter((a)=> a !== 0)
    console.log(filArr.join(' '))
})