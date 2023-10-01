function solution(sizes) {
  let a = [];
  let b = [];
  sizes.map((a) => a.sort((a, b) => a - b));
  for (const i of sizes) {
    a.push(i[0]);
    b.push(i[1]);
  }
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  return a[a.length - 1] * b[b.length - 1];
}
