const solution = nums => {
  let answer = 0;
  const dp = Array(nums.length).fill(0);
  dp[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
    answer = Math.max(answer, dp[i]);
  }

  return answer;
};

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
console.log(solution([2, 7, 5, 8, 6, 4, 7, 12, 3]));
