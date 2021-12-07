/**
 * Find Target Indices After Sorting Array
 * https://leetcode.com/problems/find-target-indices-after-sorting-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      break;
    }
    if (nums[i] === target) {
      answer.push(i);
    }
  }
  return answer;
};
