function solution(cards1, cards2, goal) {
  let cnt = 0;
  for (i in goal) {
    if (goal[i] === cards1[0]) {
      cards1.shift();
      cnt++;
    } else if (goal[i] === cards2[0]) {
      cards2.shift();
      cnt++;
    }
  }
  return cnt === goal.length ? "Yes" : "No";
}
