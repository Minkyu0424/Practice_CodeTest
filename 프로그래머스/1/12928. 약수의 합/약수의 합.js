function solution(n) {
    let sum=0;
    let num = n;
    while(num>=1){
        if(n%num === 0) sum+=num;
        num--
    }
    return sum;
}