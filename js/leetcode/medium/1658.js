/**
 * Minimum Operations to Reduce X to Zero
 * https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  if (nums[0] > x && nums[nums.length - 1] > x) return -1;

  let total = nums.reduce((acc, cur) => acc + cur, 0);
  const target = total - x;
  if (target < 0) return -1;

  let sum = 0;
  let lt = 0;
  let max = 0;

  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];

    while (sum > target) sum -= nums[lt++];

    if (sum === target) max = Math.max(max, rt - lt + 1);
  }

  return nums.length - max;
};
