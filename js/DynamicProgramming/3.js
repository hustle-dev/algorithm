function solution(nums) {
  const dp = Array.from({ length: nums.length }, () => 0);

  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    let maxV = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i] && dp[j] + 1 > maxV) maxV = dp[j] + 1;
    }
    dp[i] = maxV;
  }

  return Math.max(...dp);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
