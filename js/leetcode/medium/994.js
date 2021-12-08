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
  let ch = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
        dist[i][j] = 1;
      }
      if (grid[i][j] === 1) {
        ch++;
        dist[i][j] = -1;
      }
    }
  }

  if (ch >= 1 && queue.length === 0) return -1;
  if (queue.length === 0) return 0;

  function BFS() {
    let L = 1;
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const [curX, curY] = queue.shift();
        for (let j = 0; j < 4; j++) {
          const nx = curX + dy[j];
          const ny = curY + dx[j];

          if (nx >= 0 && ny >= 0 && nx < M && ny < N && grid[nx][ny] === 1) {
            if (dist[nx][ny] === -1) {
              dist[nx][ny] = L;
              queue.push([nx, ny]);
            }
          }
        }
        if (L === 1 && queue.length === 0 && ch === 0) {
          return 0;
        }
      }
      L++;
    }
  }

  let flag = BFS();
  if (flag === 0) return 0;

  let max = 1;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (dist[i][j] === -1) {
        return -1;
      }
      if (max < dist[i][j]) {
        max = dist[i][j];
      }
    }
  }

  return max;
};

console.log(orangesRotting([[1]]));
console.log(orangesRotting([[0, 2]]));
console.log(orangesRotting([[0]]));
console.log(orangesRotting([[1], [2], [1], [1]]));
console.log(
  orangesRotting([
    [0, 1],
    [2, 0],
  ])
);
