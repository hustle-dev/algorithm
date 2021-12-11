const solution = prices => {
  let max = 0;
  let min = 10000;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};

console.log(solution([7, 1, 5, 3, 6, 4]));
console.log(solution([7, 6, 4, 3, 1]));
