function solution(n, arr1, arr2) {
  let answer = [];

  const changeArr = (arrNum) => {
    return arrNum.map((num) => {
      let arr = [];
      while (num >= 1) {
        arr.unshift(num % 2);
        num = Math.floor(num / 2);
      }
      while (arr.length < arrNum.length) arr.unshift(0);
      return arr;
    });
  };
  arr1 = changeArr(arr1);
  arr2 = changeArr(arr2);

  for (let i in arr1) {
    let miniArr = "";
    for (let j in arr2) {
      arr1[i][j] === 0 && arr2[i][j] === 0
        ? (miniArr = miniArr + " ")
        : (miniArr = miniArr + "#");
    }
    answer.push(miniArr);
  }

  return answer;
}
