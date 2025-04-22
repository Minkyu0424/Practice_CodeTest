function solution(want, number, discount) {
    const wantMap={};
    let answer=0;
    
    for(let i=0; i<want.length; i++){
        wantMap[want[i]] = number[i];
    }
    
    for(let i=0; i<=discount.length-10; i++){
        const newMap={};
        const sliceArr = discount.slice(i, i+10)
        
        sliceArr.forEach((item) => newMap[item] = (newMap[item] || 0) +1)
        isSameMap(wantMap, newMap) && answer++;
    }
    return answer
}

function isSameMap(map1, map2) {
  for (const key in map1) {
    if (map1[key] !== map2[key]) return false;
  }
  return true;
}