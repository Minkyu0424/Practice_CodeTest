function solution(a, b) {
  let sum = 0;
  if (a === b) return a;
  let small = (a > b) ? b : a;
  let big = (a > b) ? a : b;
  for (i = small; i < big + 1; i++) {
    sum += i;
  }
  return sum;
}
