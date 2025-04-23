function solution(citations) {
    var answer = 0;
    let len = citations.length;
    
    for(let i=len; i>0; i--){
        let over = 0;
        citations.forEach((a) =>{
            if(a>=i) over++;
        })
        if(i <= over) return i
    }
    return answer;
}