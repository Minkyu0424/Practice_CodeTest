function solution(cacheSize, cities) {
  var answer = 0;
  const cacheArr = [];

  if (cacheSize === 0) return cities.length * 5;

  cities.forEach((city) => {
    city = city.toLowerCase();
    const i = cacheArr.indexOf(city);
    if (i !== -1) {
      cacheArr.splice(i, 1);
      answer++;
      // 캐시미스
    } else {
      if (cacheArr.length >= cacheSize) {
        cacheArr.shift();
      }
      answer += 5;
    }
    if (cacheSize > 0) {
      cacheArr.push(city);
    }
  });
  return answer;
}
