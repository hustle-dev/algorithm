/**
 * @title Two Best Non-Overlapping Events
 * @link https://leetcode.com/problems/two-best-non-overlapping-events/
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  const arr = [];
  for (const [start, end, value] of events) {
    arr.push([start, value, 1]);
    arr.push([end, value, -1]);
  }

  arr.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return b[2] - a[2];
  });

  let maxSum = 0;
  let val = 0;

  for (const [, sum, flag] of arr) {
    if (flag === -1) {
      maxSum = Math.max(maxSum, sum);
    } else {
      val = Math.max(val, maxSum + sum);
    }
  }
  return val;
};
