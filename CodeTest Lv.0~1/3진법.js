function solution(n) {
  let arr3 = [];
  let numTen = 0;

  while (n >= 3) {
    arr3.push(n % 3);
    n = Math.floor(n / 3);
  }
  arr3.push(n);
  for (i in arr3.reverse()) {
    numTen += 3 ** i * arr3[i];
  }
  return numTen;
}
