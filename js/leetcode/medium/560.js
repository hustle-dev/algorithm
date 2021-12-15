/**
 * Subarray Sum Equals K
 * https://leetcode.com/problems/subarray-sum-equals-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let answer = 0;
  const m = new Map();
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k) answer += 1;
    if (m.has(sum - k)) answer += m.get(sum - k);

    m.set(sum, m.get(sum) + 1 || 1);
  }

  return answer;
};
