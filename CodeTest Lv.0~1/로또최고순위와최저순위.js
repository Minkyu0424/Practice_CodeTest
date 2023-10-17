function solution(lottos, win_nums) {
  let lowS = 0;
  let highS = 0;
  let rankArr = [6, 6, 5, 4, 3, 2, 1];
  let predict = [];
  for (i in lottos) {
    if (win_nums.includes(lottos[i])) lowS++;
    if (lottos[i] === 0) highS++;
  }
  highS += lowS;
  predict.push(rankArr[highS], rankArr[lowS]);
  return predict;
}
