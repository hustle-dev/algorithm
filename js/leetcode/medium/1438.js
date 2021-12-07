/**
 * Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 * https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  const d1 = [];
  const d2 = [];

  let lt = 0;
  let rt = 0;

  for (rt; rt < nums.length; rt++) {
    while (d1.length && nums[rt] > d1[d1.length - 1]) d1.pop();
    while (d2.length && nums[rt] < d2[d2.length - 1]) d2.pop();
    d1.push(nums[rt]);
    d2.push(nums[rt]);
    if (d1[0] - d2[0] > limit) {
      if (d1[0] === nums[lt]) d1.shift();
      if (d2[0] === nums[lt]) d2.shift();
      lt++;
    }
  }

  return rt - lt;
};
