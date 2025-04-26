function solution(progresses, speeds) {
  const answer = [];
  let timeArr = [];

  progresses.forEach((work, i) => {
    const releaseTime = Math.ceil((100 - work) / speeds[i]);
      
    if (timeArr.length === 0 || timeArr[0] >= releaseTime) {
      timeArr.push(releaseTime);
    } else {
      answer.push(timeArr.length);
      timeArr = [releaseTime];
    }
  });
  answer.push(timeArr.length);
  return answer;
}
