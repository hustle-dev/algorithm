const solution = board => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  const N = board.length;
  const BFS = () => {
    const queue = [];
    queue.push([0, 0]);
    board[0][0] = 1;
    let L = 1;
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const [x, y] = queue.shift();
        for (let j = 0; j < 4; j++) {
          const nx = x + dy[j];
          const ny = y + dx[j];

          if (nx === N - 1 && ny === N - 1) return L;

          if (nx >= 0 && ny >= 0 && nx < N && ny < N && board[nx][ny] === 0) {
            board[nx][ny] = L;
            queue.push([nx, ny]);
          }
        }
      }
      L++;
    }
    return -1;
  };
  return BFS();
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
