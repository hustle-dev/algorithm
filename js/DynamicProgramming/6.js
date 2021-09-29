function solution(nums, m) {
  const dp = Array.from({ length: m + 1 }, () => Number.MAX_SAFE_INTEGER);

  dp[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums[i]; j <= m; j++) {
      const share = Math.floor(j / nums[i]);
      const rest = j % nums[i];
      dp[j] = Math.min(dp[j], share + dp[rest]);
    }
  }

  // 아래 방법이 더 간단한거 같기도 함.
  //   for (let i = 0; i < nums.length; i++) {
  //     let coin = nums[i];
  //     for (let j = nums[i]; j <= m; j++) {
  //       dp[j] = Math.min(dp[j], dp[j - coin] + 1);
  //     }
  //   }

  console.log(dp);

  return dp[m];
}

console.log(solution([1, 2, 5], 15));
