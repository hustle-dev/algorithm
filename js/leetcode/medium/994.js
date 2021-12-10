/**
 * Rotting Oranges
 * https://leetcode.com/problems/rotting-oranges/
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const M = grid.length;
  const N = grid[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  const queue = [];
  const dist = Array.from({ length: M }, () => Array(N).fill(0));
  let flag = true;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
        grid[i][j] = 0;
        dist[i][j] = 1;
      }
      if (grid[i][j] === 1) {
        flag = false;
      }
    }
  }

  if (flag === true) return 0;

  function BFS() {
    let L = 1;
    while (queue.length) {
      const len = queue.length;

      for (let i = 0; i < len; i++) {
        const [x, y] = queue.shift();
        for (let j = 0; j < 4; j++) {
          const nx = x + dy[j];
          const ny = y + dx[j];

          if (nx >= 0 && ny >= 0 && nx < M && ny < N && grid[nx][ny] === 1 && dist[nx][ny] === 0) {
            queue.push([nx, ny]);
            grid[nx][ny] = 0;
            dist[nx][ny] = L;
          }
        }
      }
      L++;
    }
  }

  BFS();

  let max = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
      if (max < dist[i][j]) {
        max = dist[i][j];
      }
    }
  }

  return max;
};
