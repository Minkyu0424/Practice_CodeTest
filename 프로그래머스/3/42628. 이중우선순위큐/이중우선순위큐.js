function solution(operations) {
    var answer = [];
    operations.forEach((item)=>{
        const [word,number] = item.split(' ');
        if(word==='I') answer.push(Number(number));
        else if(word==='D'){
            answer.sort((a,b)=>b-a)
            if(number === '-1'){
                answer.pop()
            }else{
                answer.shift()
            }
        }
    }
                       )
    
    return answer.length===0 ? [0,0] :  [Math.max(...answer),Math.min(...answer)]
}