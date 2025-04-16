function solution(k, tangerine) {
  // 1. 귤 크기별 개수 세기
  const countMap = tangerine.reduce((acc, size) => {
    acc[size] = (acc[size] || 0) + 1;
    return acc;
  }, {});

  // 2. 크기별 개수를 내림차순 정렬
  const sortedCounts = Object.values(countMap).sort((a, b) => b - a);

  // 3. 많이 가진 종류부터 골라서 k개가 될 때까지 누적
  let sum = 0;
  let typeCount = 0;

  for (const count of sortedCounts) {
    sum += count;
    typeCount++;
    if (sum >= k) break;
  }

  return typeCount;
}