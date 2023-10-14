function solution(s) {
  let same = 1;
  let sum = 0;
  let first = "1";

  for (i = 0; i < s.length - 1; i++) {
    if (first === "1") {
      first = s[i];
      continue;
    }

    if (s[i] === first )same += 1;
    else same -= 1;

    if (same === 0) {
      sum += 1;
      first = "1";
      same = 1;
    }

  }
  return same != 0 ? sum + 1 : sum;
}
solution('banana')
