function solution(survey, choices) {
  const choiceScore = [-3, -2, -1, 0, 1, 2, 3];
  const chr = "RTCFJMAN";
  let personalScore = [0, 0, 0, 0];

  for (i in survey) {
    switch (survey[i]) {
      case "RT":
        personalScore[0] -= choiceScore[choices[i] - 1];
        break;
      case "TR":
        personalScore[0] += choiceScore[choices[i] - 1];
        break;
      case "CF":
        personalScore[1] -= choiceScore[choices[i] - 1];
        break;
      case "FC":
        personalScore[1] += choiceScore[choices[i] - 1];
        break;
      case "JM":
        personalScore[2] -= choiceScore[choices[i] - 1];
        break;
      case "MJ":
        personalScore[2] += choiceScore[choices[i] - 1];
        break;
      case "AN":
        personalScore[3] -= choiceScore[choices[i] - 1];
        break;
      case "NA":
        personalScore[3] += choiceScore[choices[i] - 1];
        break;
      default:
    }
  }
  for (i in personalScore) {
    if (personalScore[i] >= 0) personalScore[i] = chr[i * 2];
    else personalScore[i] = chr[i * 2 + 1];
  }
  return personalScore.join("");
}
