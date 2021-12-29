// const solution = (prices, k) => {
//   const dp = Array.from({ length: k + 1 }, () => Array(prices.length).fill(0));

//   let invest = prices[0];
//   for(let i = 1; i<=k; i++) {
//     for(let j = 1; j <prices.length; j++) {
//       dp[i][j] = Math.max(dp[i][j], prices[j] - invest);
//     }
//   }
// };

// console.log(solution([7, 12, 3, 26, 50, 60], 2));
// // console.log(solution([1, 2, 3, 4, 5]));

const solution = prices => {
  const dp = Array.from({ length: 3 }, () => Array(prices.length).fill(0));
  for (let i = 1; i <= 2; i++) {
    let invest = -Infinity;
    for (let j = 1; j <= prices.length; j++) {
      invest = Math.max(invest, dp[i - 1][j - 1] - prices[j - 1]);
      dp[i][j] = Math.max(dp[i][j - 1], invest + prices[j]);
    }
  }
  return dp[2][prices.length - 1];
};

console.log(solution([7, 12, 3, 26, 50, 60], 2));
console.log(solution([2, 4, 1], 2));
