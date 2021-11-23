/**
 * @title 3Sum
 * @link https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const answer = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let lt = i + 1;
    let rt = nums.length - 1;
    let sum = 0;

    while (lt < rt) {
      sum = nums[i] + nums[lt] + nums[rt];

      if (sum === 0) {
        answer.push([nums[i], nums[lt], nums[rt]]);

        while (nums[rt] === nums[rt - 1]) rt--;
        while (nums[lt] === nums[lt + 1]) lt++;
        lt++;
        rt--;
      } else if (sum < 0) lt++;
      else rt--;
    }
    while (nums[i + 1] === nums[i]) i++;
  }

  return answer;
};
