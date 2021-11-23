/**
 * @title Minimize Maximum Pair Sum in Array
 * @link https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  let answer = 0;
  nums.sort((a, b) => a - b);
  let lt = 0;
  let rt = nums.length - 1;
  while (lt < rt) {
    answer = Math.max(answer, nums[lt] + nums[rt]);
    lt++;
    rt--;
  }

  return answer;
};
