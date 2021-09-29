function solution(nums, m) {
  const dp = Array.from({ length: m + 1 }, () => 0);

  for (let i = 0; i < nums.length; i++) {
    const score = nums[i][0];
    const time = nums[i][1];
    for (let j = m; j >= time; j--) {
      dp[j] = Math.max(dp[j], dp[j - time] + score);
    }
  }

  return dp[m];
}

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
