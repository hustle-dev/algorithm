/**
 * @title Two Sum
 * @link https://leetcode.com/problems/two-sum/submissions/
 * @param {array} nums
 * @param {number} target
 * @returns
 */

const solution = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(solution([2, 7, 11, 15], 9));
console.log(solution([3, 2, 4], 6));
console.log(solution([3, 3], 6));
