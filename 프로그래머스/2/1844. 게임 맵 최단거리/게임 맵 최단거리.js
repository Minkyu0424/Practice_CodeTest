function solution(maps) {
    const n = maps.length;   
    const m = maps[0].length;

    // 방문 여부를 기록할 2차원 배열 (초기값: false)
    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    // BFS 탐색을 위한 큐. 초기값은 시작점 [0, 0]과 경로 길이 0
    const queue = [[0, 0, 1]];       // 형식: [x, y, steps]

    // 방향 이동을 위한 델타값 배열 (상, 하, 좌, 우)
    const dx = [1, -1, 0, 0];        // x축 이동: 아래, 위
    const dy = [0, 0, 1, -1];        // y축 이동: 오른쪽, 왼쪽

    visited[0][0] = true;            // 시작 위치는 방문 처리

    // BFS 탐색 시작
    while (queue.length) {
        // 큐에서 하나 꺼내기: 현재 위치(x, y), 현재까지 걸린 거리(steps)
        const [x, y, steps] = queue.shift();

        // 도착지에 도달했으면 현재까지 걸린 거리 반환
        if (x === n - 1 && y === m - 1) return steps;

        // 4방향 모두 검사
        for (let d = 0; d < 4; d++) {
            const nx = x + dx[d];   // 다음 x좌표
            const ny = y + dy[d];   // 다음 y좌표

            // 1) 격자 범위 안인지 확인
            // 2) 아직 방문하지 않았는지 확인
            // 3) 해당 칸이 0인지(이동 가능한 칸) 확인
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && maps[nx][ny] === 1) {
                visited[nx][ny] = true;             // 방문 처리
                queue.push([nx, ny, steps + 1]);    // 다음 위치와 현재까지 걸린 거리 + 1 큐에 추가
            }
        }
    }

    // 도착지에 도달할 수 없는 경우
    return -1;
}