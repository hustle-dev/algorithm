/**
 * Longest Mountain in Array
 * https://leetcode.com/problems/longest-mountain-in-array/
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  const N = arr.length;
  const dp1 = Array(N).fill(1);
  const dp2 = Array(N).fill(1);
  const result = Array(N).fill(0);

  for (let i = 1; i < N; i++) {
    if (arr[i - 1] < arr[i]) {
      dp1[i] = dp1[i - 1] + 1;
    }
  }

  for (let i = N - 1; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      dp2[i] = dp2[i + 1] + 1;
    }
  }

  for (let i = 0; i < N; i++) {
    if (dp1[i] === 1 || dp2[i] === 1) continue;
    result[i] = dp1[i] + dp2[i] - 1;
  }

  return Math.max(...result);
};
