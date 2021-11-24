/**
 * Find K-th Smallest Pair Distance
 * https://leetcode.com/problems/find-k-th-smallest-pair-distance/submissions/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b);

  function isValid(mid) {
    let cnt = 0;
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
      while (j < nums.length && nums[j] - nums[i] <= mid) {
        j++;
      }
      cnt += j - i - 1;
    }
    return cnt >= k;
  }

  let lt = 0;
  let rt = nums[nums.length - 1] - nums[0];
  let answer = 0;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (isValid(mid)) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
};
