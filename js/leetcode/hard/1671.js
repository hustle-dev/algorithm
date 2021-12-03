/**
 * Minimum Number of Removals to Make Mountain Array
 * https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  const leftIter = Array(nums.length).fill(0);
  const rightIter = Array(nums.length).fill(0);
  const lengthArr = Array(nums.length);

  leftIter[0] = 1;
  rightIter[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    let max = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j] && leftIter[j] + 1 > max) {
        max = leftIter[j] + 1;
      }
    }
    leftIter[i] = max;
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    let max = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j] && rightIter[j] + 1 > max) {
        max = rightIter[j] + 1;
      }
    }
    rightIter[i] = max;
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftIter[i] === 1 || rightIter[i] === 1) {
      lengthArr[i] = -1;
      continue;
    }
    lengthArr[i] = leftIter[i] + rightIter[i] - 1;
  }

  return nums.length - Math.max(...lengthArr);
};
