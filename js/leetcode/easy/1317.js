/**
 * @title Convert Integer to the Sum of Two No-Zero Integers
 * @link https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  for (let i = 1; i <= n; i++) {
    if (!i.toString().includes('0') && !(n - i).toString().includes('0')) {
      return [i, n - i];
    }
  }
};
