2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
function solution(answers) {
  let pattern1 = "1234512345";
  let pattern2 = "21232425";
  let pattern3 = "3311224455";
  let scoreSet = [0, 0, 0];
  let topSet = [];
  const repeatStr = (str) => {
    return str.repeat(Math.floor(answers.length / str.length) + 1);
  };

  if (answers.length > 8) {
    pattern1 = repeatStr(pattern1);
    pattern2 = repeatStr(pattern2);
    pattern3 = repeatStr(pattern3);
  }

  for (i in answers) {
    if (answers[i] == pattern1[i]) scoreSet[0]++;
    if (answers[i] == pattern2[i]) scoreSet[1]++;
    if (answers[i] == pattern3[i]) scoreSet[2]++;
  }

  let maxScore = Math.max(scoreSet[0], scoreSet[1], scoreSet[2]);
  scoreSet.map((a, i) => {
    if (a == maxScore) topSet.push(i + 1);
  });

  return topSet;
}
