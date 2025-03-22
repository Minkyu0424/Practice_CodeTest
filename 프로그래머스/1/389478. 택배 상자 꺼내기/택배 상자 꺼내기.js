function solution(n, w, num) {
  if (w === 1) return n - num + 1;

  const lines = Math.ceil(n / w);
  const targetRow = Math.ceil(num / w);
  const isOddSame = (lines % 2) === (targetRow % 2);

  const topCol = (n - 1) % w;
  const targetCol = (num - 1) % w;

  const isOverLap = isOddSame
    ? targetCol <= topCol
    : Math.max(topCol, targetCol) >= w - Math.min(topCol, targetCol) - 1;

  return (lines - targetRow) + (isOverLap ? 1 : 0);
}