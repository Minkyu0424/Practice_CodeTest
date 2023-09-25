function solution(absolutes, signs) {
  let sum = 0;
  for (i in absolutes) {
    sum += signs[i] ? absolutes[i] : -absolutes[i];
  }
  return sum;
}
