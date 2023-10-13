function solution(babbling) {
  babbles = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (i of babbling) {
    for (babble of babbles) {
      if (i.includes(babble + babble)) i = i.replaceAll(babble + babble, "0");
      else if(i.includes(babble)) i = i.replaceAll(babble, "1");
    }
    if (i.replaceAll("1", "").length === 0) answer++;
  }
  return answer;
}
