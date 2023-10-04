function solution(t, p) {
  let sum = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    const num = Math.floor(t.substr(i, p.length));
    if (num <= Math.floor(p)) sum++;
  }
  return sum;
}
