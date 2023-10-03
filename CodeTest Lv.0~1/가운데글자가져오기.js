function solution(s) {
  let half = Math.floor(s.length / 2);
  if (half === 0) return s;
  return s.length % 2 === 1 ? s[half - 1] + s[half] : s[half];
}
