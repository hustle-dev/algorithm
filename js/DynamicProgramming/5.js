const solution = (nums, m) => {
  const dp = Array(m + 1).fill(0);

  dp[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums[i][0]; j <= m; j++) {
      dp[j] = Math.max(dp[j - nums[i][0]] + nums[i][1], dp[j]);
    }
  }

  console.log(dp);

  return dp[m];
};

console.log(
  solution(
    [
      [5, 12],
      [3, 8],
      [6, 14],
      [4, 7],
    ],
    11
  )
);
