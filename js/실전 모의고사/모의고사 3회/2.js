const solution = board => {
  let answer = 0;
  let N = board.length;
  let maxHeight = 0;
  const ch = Array.from({ length: N }, () => Array(N).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] > maxHeight) maxHeight = board[i][j];
    }
  }

  function BFS(point, rain) {
    let queue = [];
    queue.push(point);
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const nx = x + dy[k];
        const ny = y + dx[k];

        if (nx >= 0 && ny >= 0 && nx < N && ny < N && board[nx][ny] <= rain && ch[nx][ny] !== -1) {
          queue.push([nx, ny]);
          ch[nx][ny] = -1;
        }
      }
    }
  }

  function BFS2(point) {
    let queue = [];
    queue.push(point);
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const nx = x + dy[k];
        const ny = y + dx[k];

        if (nx >= 0 && ny >= 0 && nx < N && ny < N && ch[nx][ny] !== -1) {
          queue.push([nx, ny]);
          ch[nx][ny] = -1;
        }
      }
    }
  }

  for (let k = 1; k < maxHeight; k++) {
    ch.forEach(el => el.fill(0));
    let cnt = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (board[i][j] <= k && ch[i][j] !== -1) {
          ch[i][j] = -1;
          BFS([i, j], k);
        }
      }
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (ch[i][j] >= 0) {
          ch[i][j] = -1;
          cnt++;
          BFS2([i, j], k);
        }
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
};

console.log(
  solution([
    [6, 8, 2, 6, 2],
    [3, 2, 3, 4, 6],
    [6, 7, 3, 3, 2],
    [7, 2, 5, 3, 6],
    [8, 9, 5, 2, 7],
  ])
);
