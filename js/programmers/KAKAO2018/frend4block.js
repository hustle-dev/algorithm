const solution = (m, n, board) => {
  let answer = 0;
  const dx = [1, 1, 0];
  const dy = [0, 1, 1];
  const matrix = Array.from({ length: m }, () => Array(n).fill(0));
  let sameNum = 0;
  let deleteMatrix = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      matrix[i][j] = board[i][j];
    }
  }

  const checkMatrix = () => {
    while (true) {
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          const curWord = matrix[i][j];
          for (let k = 0; k < 3; k++) {
            const [nx, ny] = [i + dy[k], j + dx[k]];
            if (nx < m && ny < n && matrix[nx][ny] === curWord && matrix[nx][ny] !== 0) {
              sameNum++;
            }
          }
          if (sameNum === 3) {
            deleteMatrix.push([i, j]);
            for (let k = 0; k < 3; k++) {
              const [nx, ny] = [i + dy[k], j + dx[k]];
              deleteMatrix.push([nx, ny]);
            }
          }
          sameNum = 0;
        }
      }

      if (deleteMatrix.length === 0) break;

      for (let [x, y] of deleteMatrix) {
        matrix[x][y] = 0;
      }
      deleteMatrix = [];

      for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
          if (matrix[i][j] === 0) {
            let k = i;
            while (k >= 0) {
              if (matrix[k][j] !== 0) {
                matrix[i][j] = matrix[k][j];
                matrix[k][j] = 0;
                break;
              }
              k--;
            }
          }
        }
      }
    }
  };

  checkMatrix();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        answer++;
      }
    }
  }

  return answer;
};

console.log(solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']));
console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']));
