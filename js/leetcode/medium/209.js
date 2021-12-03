/**
 * Minimum Size Subarray Sum
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let answer = 1000000000;
  let sum = nums[0];
  let lt = 0;

  if (sum >= target) answer = 1;

  for (let rt = 1; rt < nums.length; rt++) {
    sum += nums[rt];

    if (sum >= target) answer = Math.min(answer, rt - lt + 1);

    while (sum >= target) {
      sum -= nums[lt];
      lt++;
      if (sum >= target) answer = Math.min(answer, rt - lt + 1);
    }
  }

  return answer === 1000000000 ? 0 : answer;
};
