const solution = nums => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  const N = nums.length;
  const M = nums[0].length;

  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const cur = nums[i][j];
      let flag = true;
      for (let k = 0; k < 4; k++) {
        const nx = i + dy[k];
        const ny = j + dx[k];
        if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
          if (cur < nums[nx][ny]) {
            flag = false;
            break;
          }
        }
      }
      if (flag) {
        sum += 1;
      }
    }
  }

  return sum;
};

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
