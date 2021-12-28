const solution = (cardPoints, k) => {
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

console.log(solution([1, 2, 3, 4, 5, 6, 1], 3));
console.log(solution([9, 7, 7, 9, 7, 7, 9], 7));
console.log(solution([2, 2, 2], 2));
