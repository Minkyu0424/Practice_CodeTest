function solution(k, m, score) {
    let sum=0;
    score.sort().reverse();
    for(i=1; i<=score.length/m;i++){
        sum+=score[i*m-1]*m
    }
    return(sum);
}