/**
 * Minimum Time Difference
 * https://leetcode.com/problems/minimum-time-difference/
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const MAX = 1440;
  let min = Number.MAX_SAFE_INTEGER;
  const secondArr = timePoints.map(time => {
    const [HH, MM] = time.split(':');
    return Number(HH) * 60 + Number(MM);
  });
  secondArr.sort((a, b) => a - b);

  for (let i = 0; i < secondArr.length - 1; i++) {
    min = Math.min(min, Math.abs(secondArr[i] - secondArr[i + 1]));
    if (min === 0) return 0;
  }

  min = Math.min(
    min,
    Math.abs(secondArr[0] - secondArr[secondArr.length - 1]),
    MAX - Math.abs(secondArr[0] - secondArr[secondArr.length - 1])
  );

  return min;
};
