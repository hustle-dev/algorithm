/**
 * Subarrays with K Different Integers
 * https://leetcode.com/problems/subarrays-with-k-different-integers/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  function atMost(K) {
    const m = new Map();
    let answer = 0;

    let lt = 0;
    let rt = 0;
    for (rt; rt < nums.length; rt++) {
      m.set(nums[rt], m.get(nums[rt]) + 1 || 1);
      if (m.get(nums[rt]) === 1) K--;

      while (K < 0) {
        m.set(nums[lt], m.get(nums[lt]) - 1);
        if (m.get(nums[lt]) === 0) K++;
        lt++;
      }

      answer += rt - lt + 1;
    }

    return answer;
  }

  return atMost(k) - atMost(k - 1);
};
