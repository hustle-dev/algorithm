const solution = (nums, m) => {
  const dp = Array(m + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= m; i++) {
    for (const coin of nums) {
      if (i - coin >= 0) dp[i] += dp[i - coin];
    }
  }

  console.log(dp);
  return dp[m];
};

console.log(solution([2, 3, 5], 10));
