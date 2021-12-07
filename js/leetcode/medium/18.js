/**
 * 4Sum
 * https://leetcode.com/problems/4sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const answer = [];

  for (let a = 0; a < nums.length - 3; a++) {
    for (let b = a + 1; b < nums.length - 2; b++) {
      let c = b + 1;
      let d = nums.length - 1;

      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (sum === target) {
          answer.push([nums[a], nums[b], nums[c], nums[d]]);

          while (nums[c] === nums[c + 1]) c++;
          while (nums[d] === nums[d - 1]) d--;

          c++;
          d--;
        } else if (sum > target) {
          while (nums[d] === nums[d - 1]) d--;
          d--;
        } else {
          while (nums[c] === nums[c + 1]) c++;
          c++;
        }
      }

      while (nums[b] === nums[b + 1]) b++;
    }
    while (nums[a] === nums[a + 1]) a++;
  }
  return answer;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
