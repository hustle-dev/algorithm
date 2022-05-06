// 효율성, 정확성 모두통과
// 누적합 사용
// r1, c1와 r2+1, c2+1에 degree만큼 더해주고
// r2+1, c1와 r1, c2+1에 degree만큼 빼준후
// 위에서 아래로, 왼에서 오른으로 누적합 한후 더함
const solution = (board, skill) => {
  const N = board.length;
  const M = board[0].length;
  const newBoard = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
  let cnt = 0;

  skill.forEach(log => {
    const [type, r1, c1, r2, c2, degree] = log;

    if (type === 1) {
      newBoard[r1][c1] -= degree;
      newBoard[r2 + 1][c2 + 1] -= degree;
      newBoard[r1][c2 + 1] += degree;
      newBoard[r2 + 1][c1] += degree;
    } else {
      newBoard[r1][c1] += degree;
      newBoard[r2 + 1][c2 + 1] += degree;
      newBoard[r1][c2 + 1] -= degree;
      newBoard[r2 + 1][c1] -= degree;
    }
  });

  for (let j = 0; j < M + 1; j++) {
    let acc = newBoard[0][j];
    for (let i = 1; i < N + 1; i++) {
      newBoard[i][j] += acc;
      acc = newBoard[i][j];
    }
  }

  for (let i = 0; i < N + 1; i++) {
    let acc = newBoard[i][0];
    for (let j = 1; j < M + 1; j++) {
      newBoard[i][j] += acc;
      acc = newBoard[i][j];
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      board[i][j] += newBoard[i][j];
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] > 0) cnt++;
    }
  }

  return cnt;
};

// 정확성만 통과한 코드
const solution2 = (board, skill) => {
  const N = board.length;
  const M = board[0].length;
  let cnt = 0;

  skill.forEach(log => {
    const [type, r1, c1, r2, c2, degree] = log;

    for (let i = r1; i <= r2; i++) {
      for (let j = c1; j <= c2; j++) {
        if (type === 1) board[i][j] -= degree;
        else board[i][j] += degree;
      }
    }
  });

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] > 0) cnt++;
    }
  }

  return cnt;
};

console.log(
  solution(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
);
