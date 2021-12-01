const solution = (nums, m) => {
  const dp = Array(m + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    let times = nums[i][1];
    let score = nums[i][0];
    for (let j = m; j >= times; j--) {
      dp[j] = Math.max(dp[j], dp[j - times] + score);
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
