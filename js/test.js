const solution = (nums, m) => {
  const dp = Array(m + 1).fill(0);

  for (const [weight, value] of nums) {
    for (let i = weight; i <= m; i++) {
      dp[i] = Math.max(dp[i], dp[i - weight] + value);
    }
  }
  console.log(dp);
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
