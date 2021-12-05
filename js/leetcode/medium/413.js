/**
 * Arithmetic Slices
 * https://leetcode.com/problems/arithmetic-slices/
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) return 0;

  let answer = 0;
  let lt = 0;
  let diff = nums[1] - nums[0];
  for (let rt = 2; rt < nums.length; rt++) {
    if (nums[rt] - nums[rt - 1] === diff) {
      answer += rt - lt - 1;
    } else {
      lt = rt - 1;
      diff = nums[rt] - nums[rt - 1];
    }
  }

  return answer;
};
