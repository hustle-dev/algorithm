/**
 * Find First and Last Position of Element in Sorted Array
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let lt = 0;
  let rt = nums.length - 1;
  const answer = [];

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (nums[mid] === target) {
      lt = mid;
      rt = mid;
      while (nums[rt] === nums[rt + 1]) rt++;
      while (nums[lt] === nums[lt - 1]) lt--;

      return [lt, rt];
    } else if (nums[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return [-1, -1];
};
