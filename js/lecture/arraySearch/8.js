function solution(nums) {
  let answer = 0;
  const N = nums.length;
  let flag = true;
  const dy = [-1, 0, 1, 0];
  const dx = [0, -1, 0, 1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (nx >= 0 && ny >= 0 && nx < N && ny < N && nums[i][j] <= nums[nx][ny]) {
          flag = false;
          break;
        }
      }
      if (flag) answer += 1;
      flag = true;
    }
  }
  return answer;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
