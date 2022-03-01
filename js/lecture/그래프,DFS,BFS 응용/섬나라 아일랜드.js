const solution = board => {
  const N = board.length;
  const M = board[0].length;

  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, -1, -1, -1, 0, 1, 1, 1];

  let answer = 0;

  const DFS = ([x, y]) => {
    for (let i = 0; i < 8; i++) {
      const nx = x + dy[i];
      const ny = y + dx[i];
      if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
        if (board[nx][ny] === 1) {
          board[nx][ny] = 0;
          DFS([nx, ny]);
        }
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        DFS([i, j]);
        answer += 1;
      }
    }
  }

  return answer;
};

console.log(
  solution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);
