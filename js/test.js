const solution = board => {
  let L = 1;
  const N = board.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  function BFS() {
    const queue = [];
    queue.push([0, 0]);
    board[0][0] = 1;
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const [curX, curY] = queue.shift();
        for (let j = 0; j < 4; j++) {
          const nx = curX + dy[j];
          const ny = curY + dx[j];

          if (nx === N - 1 && ny === N - 1) return L;

          if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
            if (board[nx][ny] === 0) {
              board[nx][ny] = 1;
              queue.push([nx, ny]);
            }
          }
        }
      }
      L++;
    }
    return -1;
  }

  const answer = BFS();

  return answer;
};

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
