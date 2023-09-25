function solution(d, budget) {
  let sum = 0;
  let cnt = 0;
  d.sort((a, b) => a - b); //크기순으로 정렬
  for (i of d) { //낮은 예산부터 체크
    if (sum + i > budget) return cnt; //예산 초과시 지금까지 cnt를 반환
    if (sum + i === budget) return cnt+1; //예산과 일치 시 cnt+1을 반환
    sum += i;
    cnt++;
  }
  return cnt // 모든 부서에 돌리고도 예산이 남는경우
}
