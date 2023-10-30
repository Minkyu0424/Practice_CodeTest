const total = (n) => (n != 1 ? n + total(n - 1) : 1);

function solution(n) {
  let answer = 1;
  let i = 2;
  if (n <= 2) return 1;

  while (total(i) <= n) {
    if ((n - total(i - 1)) % i === 0) answer++;
    i++;
  }
  return answer;
}
