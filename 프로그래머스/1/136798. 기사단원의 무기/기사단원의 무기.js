function solution(number, limit, power) {
  let iron = 0;
  
  for (let num = 1; num <= number; num++) {
    let cnt=0;
    let index = 1;
    while (index <= Math.sqrt(num)){
        if(num % index === 0){
            cnt++
            if(num / index !== index) cnt++;
        } 
        index++
    }
    if(cnt > limit){
        iron+=power
    }else{
        iron+=cnt
    }
  }
  return iron
}
