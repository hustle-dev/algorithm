/**
 * Minimum Size Subarray Sum
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let lt = 0;
  let sum = 0;
  let answer = 1000000;

  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];
    while (sum >= target) {
      if (sum >= target) answer = Math.min(answer, rt - lt + 1);
      sum -= nums[lt++];
    }
  }

  return answer === 1000000 ? 0 : answer;
};
