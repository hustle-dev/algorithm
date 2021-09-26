function solution(board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  const N = board.length - 1;

  function BFS() {
    const queue = [];
    queue.push([0, 0]);
    let L = 1;
    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let [curX, curY] = queue.shift();
        for (let j = 0; j < 4; j++) {
          let nx = curX + dy[j];
          let ny = curY + dx[j];

          if (nx >= 0 && ny >= 0 && nx <= N && ny <= N && board[nx][ny] === 0) {
            queue.push([nx, ny]);
            board[nx][ny] = L;
          }
        }
      }
      L += 1;
    }
  }
  board[0][0] = 1;
  BFS();

  return board[6][6] === 0 ? -1 : board[6][6];
}

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 0],
  ])
);
