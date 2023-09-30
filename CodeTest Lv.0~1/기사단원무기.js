function solution(number, limit, power) {
  let iron = 0;
  for (let i = 1; i <= number; i++) {
    let sum = 0;
    for (j = 1; j <= i / 2; j++) {
      if (i % j === 0) sum += 1;
    }
    sum+1>limit ?  iron+=power : iron+=sum+1;
  }
  console.log(iron);
}
solution(10, 3, 2);
