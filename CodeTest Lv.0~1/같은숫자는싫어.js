function solution(arr) {
  let arr2 = [];
  let cnt = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr2[cnt] != arr[i]) {
      arr2.push(arr[i]);
      cnt++;
    }
  }
  return arr2;
}
