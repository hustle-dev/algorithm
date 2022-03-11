const solution = nums => {
  const dp = new Array(nums.length).fill(0);
  dp[0] = 1;
  let answer = 0;

  for (let i = 1; i < nums.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
    if (answer < dp[i]) answer = dp[i];
  }

  return answer;
};

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
