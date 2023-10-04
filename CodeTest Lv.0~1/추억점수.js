function solution(name, yearning, photo) {
  let result = [];
  for (let i = 0; i < photo.length; i++) {
    score = 0;
    for (let j in name) {
      if (photo[i].includes(name[j])) {
        score += yearning[j];
      }
    }
    result.push(score);
  }
  return result;
}
