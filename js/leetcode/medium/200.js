/**
 * Number of Islands
 * https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let answer = 0;
  const M = grid.length;
  const N = grid[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  const queue = [];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === '1') {
        queue.push([i, j]);
      }
    }
  }

  function DFS(x, y) {
    for (let i = 0; i < 4; i++) {
      const nx = x + dy[i];
      const ny = y + dx[i];

      if (nx >= 0 && ny >= 0 && nx < M && ny < N && grid[nx][ny] === '1') {
        grid[nx][ny] = '0';
        DFS(nx, ny);
      }
    }
  }

  for (const [x, y] of queue) {
    if (grid[x][y] === '1') {
      grid[x][y] = '0';
      answer++;
      DFS(x, y);
    }
  }

  return answer;
};
