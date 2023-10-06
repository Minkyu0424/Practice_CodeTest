function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    let cnt = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        cnt++;
        if (i / j != j) cnt++;
      }
    }
    sum = sum + (cnt % 2 === 0 ? +i : -i);
  }
  console.log(sum);
}
solution(24, 27);
