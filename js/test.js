function solution(board) {
  let answer = 0;
  const queue = [];
  const N = board.length;
  const M = board[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }

  function BFS() {
    let L = 1;
    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        const [curX, curY] = queue.shift();
        for (let j = 0; j < 4; j++) {
          const nx = curX + dy[j];
          const ny = curY + dx[j];

          if (nx >= 0 && ny >= 0 && nx < N && ny < M && board[nx][ny] === 0) {
            board[nx][ny] = L;
            queue.push([nx, ny]);
          }
        }
      }
      L++;
    }
  }

  BFS();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0) {
        return -1;
      }

      if (answer < board[i][j]) {
        answer = board[i][j];
      }
    }
  }

  return answer;
}

console.log(
  solution([
    [0, 0, -1, 0, 0, 0],
    [0, 0, 1, 0, -1, 0],
    [0, 0, -1, 0, 0, 0],
    [0, 0, 0, 0, -1, 1],
  ])
);
