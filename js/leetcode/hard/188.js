/**
 * Best Time to Buy and Sell Stock IV
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (prices.length === 0) return 0;
  const dp = Array.from({ length: k + 1 }, () => Array(prices.length).fill(0));
  for (let i = 1; i <= k; i++) {
    let invest = -Infinity;
    for (let j = 1; j <= prices.length; j++) {
      invest = Math.max(invest, dp[i - 1][j - 1] - prices[j - 1]);
      dp[i][j] = Math.max(dp[i][j - 1], invest + prices[j]);
    }
  }
  return dp[k][prices.length - 1];
};
