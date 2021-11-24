const solution = (nums, m) => {
  const dp = Array(m + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    let coin = nums[i];
    for (let j = coin; j <= m; j++) {
      dp[j] = Math.min(dp[j], Math.floor(j / coin) + dp[j % coin]);
    }
  }

  return dp[m];
};

console.log(solution([1, 2, 5], 15));
