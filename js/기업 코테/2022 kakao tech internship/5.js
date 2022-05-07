const solution = (rc, operations) => {
  const N = rc.length;
  const M = rc[0].length;
  operations.forEach(op => {
    let newRc = Array.from({ length: N }, () => Array());
    if (op === 'ShiftRow') {
      for (let i = 0; i < N; i++) {
        if (i + 1 < N) {
          newRc[i + 1] = rc[i];
        } else {
          newRc[0] = rc[i];
        }
      }
    } else {
      newRc[0][0] = rc[1][0];
      newRc[N - 1][M - 1] = rc[N - 2][M - 1];
      for (let j = 1; j < M; j++) {
        newRc[0][j] = rc[0][j - 1];
      }

      for (let j = M - 2; j >= 0; j--) {
        newRc[N - 1][j] = rc[N - 1][j + 1];
      }

      for (let i = 1; i < N - 1; i++) {
        newRc[i][M - 1] = rc[i - 1][M - 1];
      }

      for (let i = N - 2; i >= 0; i--) {
        newRc[i][0] = rc[i + 1][0];
      }

      for (let i = 1; i < N - 1; i++) {
        for (let j = 1; j < M - 1; j++) {
          newRc[i][j] = rc[i][j];
        }
      }
    }

    rc = newRc;
  });

  return rc;
};

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    ['ShiftRow', 'Rotate', 'ShiftRow', 'Rotate']
  )
);
