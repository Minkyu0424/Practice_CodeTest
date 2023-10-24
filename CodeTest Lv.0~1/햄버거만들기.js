function solution(ingredient) {
  let answer = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (
      ingredient[i] == 1 &&
      ingredient[i + 1] == 2 &&
      ingredient[i + 2] == 3 &&
      ingredient[i + 3] == 1
    ) {
      ingredient.splice(i, 4);
      answer++;
      if (i == 0) i -= 1;
      else if (i == 1) i = -2;
      else if (i >= 2) i -= 3;
    }
  }
  return answer;
}
