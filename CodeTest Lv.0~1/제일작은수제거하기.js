function solution(arr) {
  let idx = arr.indexOf(Math.min(...arr));
  arr.splice(idx, 1);
  return arr.length ? arr : [-1];
}
