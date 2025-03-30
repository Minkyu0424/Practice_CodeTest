function solution(clothes) {
  const costume = {};
  let answer = 1;
  for (let item of clothes) {
    if (!costume[item[1]]) costume[item[1]] = [];
    costume[item[1]].push(item[0]);
  }
  const keys = Object.keys(costume);
  for (let key of keys) {
    answer = answer * (costume[key].length + 1);
  }
  return answer - 1;
}
