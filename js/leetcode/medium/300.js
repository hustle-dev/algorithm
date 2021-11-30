/**
 * Longest Increasing Subsequence
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = Array(nums.length).fill(0);
  dp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }

  return Math.max(...dp);
};
