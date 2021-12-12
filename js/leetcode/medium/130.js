/**
 * Surrounded Regions
 * https://leetcode.com/problems/surrounded-regions/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const M = board.length;
  const N = board[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  const queue = [];

  for (let i = 0; i < M; i++) {
    if (i === 0 || i === M - 1) {
      for (let j = 0; j < N; j++) {
        if (board[i][j] === 'O') {
          queue.push([i, j]);
        }
      }
    } else {
      if (board[i][0] === 'O') queue.push([i, 0]);
      if (board[i][N - 1] === 'O') queue.push([i, N - 1]);
    }
  }
  function DFS(nx, ny) {
    board[nx][ny] = 1;

    for (let i = 0; i < 4; i++) {
      const NX = nx + dy[i];
      const NY = ny + dx[i];
      if (NX >= 0 && NY >= 0 && NX < M && NY <= N && board[NX][NY] === 'O') {
        DFS(NX, NY);
      }
    }
  }
  for (let [x, y] of queue) {
    if (board[x][y] === 1) continue;
    DFS(x, y);
  }
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === 1) {
        board[i][j] = 'O';
      }
    }
  }

  return;
};
