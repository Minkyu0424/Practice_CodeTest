function solution(arr, divisor) {
  let arrF = arr.filter((a) => a % divisor === 0).sort((a, b) => a - b);
  return arrF.length === 0 ? [-1] : arrF;
}
