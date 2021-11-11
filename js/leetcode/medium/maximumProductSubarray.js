/**
 * https://leetcode.com/problems/maximum-product-subarray/
 * @param {array} nums
 * @returns
 */

const maxProduct = nums => {
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let curVal = nums[i];
    answer = Math.max(answer, curVal);
    let j = i + 1;
    while (j < nums.length) {
      curVal = curVal * nums[j];
      answer = Math.max(answer, curVal);

      j++;
    }
  }

  return answer;
};
