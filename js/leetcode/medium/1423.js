/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const total = cardPoints.reduce((acc, cur) => acc + cur, 0);
  if (cardPoints.length === k) return total;

  let lt = 0;
  let minSum = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let len = 0;
  let takeNum = cardPoints.length - k;
  for (let rt = 0; rt < cardPoints.length; rt++) {
    sum += cardPoints[rt];

    if (len < takeNum) len++;

    if (len === takeNum) {
      minSum = Math.min(sum, minSum);
      sum -= cardPoints[lt];
      lt++;
      len--;
    }
  }

  return total - minSum;
};
