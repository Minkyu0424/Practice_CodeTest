function solution(n, w, num) {
    const lines = Math.ceil(n / w); 
    const targetRow = Math.ceil(num / w);  
    if(w===1){
        return n-num+1
    }
    const isOddTop = lines % 2 !== 0;  
    const isOddBottom = targetRow % 2 !== 0;  
    const isOddSame = isOddTop === isOddBottom; 
    
    const topCol = (n - 1) % w ; 
    const targetCol = (num - 1) % w ;
    
    console.log(`목표는 ${targetCol} 위치에 상단 마지막 박스는 ${topCol}에 위치`)
    console.log(isOddSame, targetCol, topCol)
    
const isOverLap = isOddSame
  ? targetCol <= topCol
  : topCol > targetCol
  ? topCol >= w - targetCol - 1
  : targetCol >= w - topCol - 1;
    
    const defaultValue = lines - targetRow; 
    console.log(lines, 'lines 값', targetRow, 'targetRow')
    console.log(defaultValue, '기본 차이 값', isOverLap, '겹쳤는지 여부')
    return isOverLap ? defaultValue+1  : defaultValue;
}