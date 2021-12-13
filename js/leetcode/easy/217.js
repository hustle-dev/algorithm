/**
 * Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], m.get(nums[i]) + 1 || 1);
    if (m.get(nums[i]) === 2) return true;
  }
  return false;
};
