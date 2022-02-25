const solution = (nums, m) => {
  let answer = 0;
  const total = nums.reduce((acc, cur) => acc + cur[0], 0);

  const DFS = (L, sum, time, tsum) => {
    if (time > m) return;
    if (total - tsum + sum < answer) return;
    if (L === nums.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + nums[L][0], time + nums[L][1], tsum + nums[L][0]);
      DFS(L + 1, sum, time, tsum + nums[L][0]);
    }
  };

  DFS(0, 0, 0, 0);
  return answer;
};

console.log(
  solution(
    [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4],
    ],
    20
  )
);
console.log(
  solution(
    [
      [15, 6],
      [30, 11],
      [23, 8],
      [14, 4],
      [10, 3],
      [20, 7],
    ],
    25
  )
);
