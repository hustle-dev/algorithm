/**
 * https://leetcode.com/problems/3sum/
 * @param {array} nums
 * @returns
 */

const solution = nums => {
  const answer = [];
  const checkArr = [];
  nums.sort((a, b) => a - b);
  const maxVal = nums[nums.length - 1];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] + nums[j] + maxVal >= 0) {
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[i] + nums[j] + nums[k] === 0) {
            if (!checkArr.includes('' + nums[i] + nums[j] + nums[k])) {
              checkArr.push('' + nums[i] + nums[j] + nums[k]);
              answer.push([nums[i], nums[j], nums[k]]);
            }
          }
        }
      }
    }
  }
  return answer;
};
