/**
 * Frequency of the Most Frequent Element
 * https://leetcode.com/problems/frequency-of-the-most-frequent-element/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);
  let answer = 0;
  let cur = 0;
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    cur += nums[i];

    while ((i - left + 1) * nums[i] > cur + k) {
      cur -= nums[left++];
    }

    answer = Math.max(answer, i - left + 1);
  }

  return answer;
};
