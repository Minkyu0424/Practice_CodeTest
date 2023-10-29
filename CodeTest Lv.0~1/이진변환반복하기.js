function solution(s) {
    let cnt=0;
    let cntZero =0;
    while(s!='1'){
        let num = s.split('0').join('').length;
        cntZero += s.length - num;
        cnt++;
        s=num.toString(2);
    }
    return([cnt, cntZero]);
}