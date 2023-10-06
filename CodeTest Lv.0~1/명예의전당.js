function solution(k, score) {
  let glory = [];
  let result = [];
  for (i in score) {
    if (glory.length < k) {
      glory.push(score[i]);
      glory.sort((a, b) => a - b);
    } else if (glory.length === k && glory[0] < score[i]) {
      glory.shift();
      glory.push(score[i]);
      glory.sort((a, b) => a - b);
    }
    result.push(glory[0]);
  }
  return result;
}
