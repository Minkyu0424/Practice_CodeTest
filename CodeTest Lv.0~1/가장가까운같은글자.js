function solution(s) {
  var part = [];
  let answer = [];
  for (const i of s) {
    answer.push(part.indexOf(i) === -1 ? -1 : part.indexOf(i) + 1);
    part.unshift(i);
  }
  return answer;
}
