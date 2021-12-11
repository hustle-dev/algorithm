const solution = grid => {
  const M = grid.length;
  const N = grid[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  let cnt = 0;
  let answer = Number.MAX_SAFE_INTEGER;
  const startPoint = [];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 1) cnt++;
      if (grid[i][j] === 0) startPoint.push([i, j]);
    }
  }

  if (!startPoint.length) return -1;

  const fixedLen = startPoint.length;

  function BFS() {
    for (let i = 0; i < fixedLen; i++) {
      const dist = Array.from({ length: M }, () => Array(N).fill(0));
      let restCnt = cnt;
      let distance = 0;
      const [startX, startY] = startPoint[0];
      dist[startX][startY] = -1;
      const queue = [];
      queue.push(startPoint.shift());

      let L = 1;
      while (queue.length) {
        const len = queue.length;
        let flag = false;
        for (let j = 0; j < len; j++) {
          let flag2 = false;
          const [x, y] = queue.shift();
          for (let k = 0; k < 4; k++) {
            const nx = x + dy[k];
            const ny = y + dx[k];

            if (nx >= 0 && ny >= 0 && nx < M && ny < N && grid[nx][ny] <= 1) {
              if (grid[nx][ny] === 1 && dist[nx][ny] === 0) {
                dist[nx][ny] = -1;
                restCnt--;
                distance += L;
                if (restCnt === 0) {
                  flag = true;
                  flag2 = true;
                }
              } else {
                if (dist[nx][ny] === 0) {
                  dist[nx][ny] = -1;
                  queue.push([nx, ny]);
                }
              }
            }
          }
          if (flag2) break;
        }
        L++;
        if (flag) break;
      }
      if (restCnt === 0) answer = Math.min(answer, distance);
    }
  }

  BFS();

  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
};
