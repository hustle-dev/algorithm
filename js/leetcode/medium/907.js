/**
 * Sum of Subarray Minimums
 * https://leetcode.com/problems/sum-of-subarray-minimums/
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i; j >= 0; j--) {
      if (min > arr[j]) {
        min = arr[j];
      }
      answer += min;
    }
  }

  return answer % (10 ** 9 + 7);
};
