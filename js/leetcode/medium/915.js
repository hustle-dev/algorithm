/**
 * Partition Array into Disjoint Intervals
 * https://leetcode.com/problems/partition-array-into-disjoint-intervals/
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  const dp1 = Array(nums.length).fill(0);
  const dp2 = Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
  dp1[0] = nums[0];
  dp2[nums.length - 1] = nums[nums.length - 1];

  for (let i = 1; i < nums.length; i++) {
    dp1[i] = Math.max(nums[i], dp1[i - 1]);
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    dp2[i] = Math.min(nums[i], dp2[i + 1]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (dp1[i] <= dp2[i + 1]) return i + 1;
  }
};
