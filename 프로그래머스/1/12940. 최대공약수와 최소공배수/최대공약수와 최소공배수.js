function solution(n, m) {
    var answer = [];
    let isContinue=true
    let num = n > m ? n : m
    
    if(n===m) return [n,m]
    
    while(isContinue){
        if(n%num === 0 && m%num === 0){
            answer.push(num);
            isContinue = false
        }
        num--
    }
    answer.push(n*m/answer[0])
    return answer;
}