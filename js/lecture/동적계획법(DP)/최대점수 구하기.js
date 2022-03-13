const solution = (nums, m) => {
  const dp = new Array(m + 1).fill(0);

  for (const [score, time] of nums) {
    for (let i = m; i >= time; i--) {
      dp[i] = Math.max(dp[i], dp[i - time] + score);
    }
  }
  return dp[m];
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
