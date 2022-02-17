const solution = nums => {
  let dist = 999;

  const dp = new Array(nums.length).fill(999);

  for (let i = 0; i < nums.length; i++) {
    dist = nums[i] === 1 ? 0 : dist + 1;

    dp[i] = Math.min(dp[i], dist);
  }

  dist = 999;
  for (let i = nums.length - 1; i >= 0; i--) {
    dist = nums[i] === 1 ? 0 : dist + 1;
    dp[i] = Math.min(dp[i], dist);
  }

  return Math.max(...dp);
};

console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]));
