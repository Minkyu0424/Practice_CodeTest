const fs = require('fs');
const strArr = fs.readFileSync(0).toString().trim().split('\n')
const lastStr = strArr[strArr.length-1];

const filteredArr = strArr.slice(0,strArr.length-1).filter((word)=> word[word.length-1]===lastStr)

if(filteredArr.length===0){
    console.log('None');
}else{
    filteredArr.forEach((word)=>console.log(word))
}