const solution = (nums, m) => {
  const dp = Array(m + 1).fill(0);
  dp[0] = 1;

  for (const coin of nums) {
    for (let i = coin; i <= m; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[m];
};

console.log(solution([2, 3, 5], 10));
