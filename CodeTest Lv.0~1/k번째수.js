function solution(array, commands) {
  let arr = [];
  for (i of commands) {
    let num = array.slice(i[0] - 1, i[1]).sort((a, b) => a - b)[i[2] - 1];
    arr.push(num);
  }
  return arr;
}
