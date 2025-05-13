function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const queue = [[0, 0, 1]];

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  visited[0][0] = true;

  while (queue.length) {
    const [x, y, steps] = queue.shift();
    if (x === n - 1 && y === m - 1) return steps;

    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        !visited[nx][ny] &&
        maps[nx][ny] === 1
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, steps + 1]);
      }
    }
  }
  return -1;
}
