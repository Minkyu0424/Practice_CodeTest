function solution(dartResult) {
    var answer = []
    let index = -1;
    const arr = dartResult.split('')
    for(let i=0; i<arr.length; i++){
       if(!isNaN(arr[i])){
           if(!isNaN(arr[i-1])){
                answer.pop();
                answer.push(10);
           }else{
            answer.push(Number(arr[i]));    
           }
           index = answer.length - 1;
       } 
       if(arr[i] === 'D') answer[index] = answer[index]**2
       if(arr[i] === 'T') answer[index] = answer[index]**3
       if(arr[i] === '*'){
           answer[index] = answer[index] * 2
           if(index !== 0) answer[index-1] *= 2
       } 
       if(arr[i] === '#'){
           answer[index] *= -1
       } 
    }
    return answer.reduce((acc, a)=> acc+a, 0);
}