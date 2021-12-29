/**
 * Best Time to Buy and Sell Stock III
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
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
