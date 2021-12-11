/**
 * Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const N = prices.length;
  const max = new Array(N).fill(0);
  const min = new Array(N).fill(0);
  let answer = 0;

  min[0] = prices[0];
  max[N - 1] = prices[N - 1];

  let curMin = prices[0];
  for (let i = 1; i < N; i++) {
    if (curMin > prices[i]) curMin = prices[i];
    min[i] = curMin;
  }

  let curMax = prices[N - 1];
  for (let i = N - 2; i >= 0; i--) {
    if (curMax < prices[i]) curMax = prices[i];
    max[i] = curMax;
  }

  for (let i = 0; i < N - 1; i++) {
    let diff = Math.abs(min[i] - max[i]);
    if (answer < diff) answer = diff;
  }

  return answer;
};

// 다른 버전
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
//  var maxProfit = function(prices) {
//     let max = 0;
//     let min = 10000;
//     for (let i = 0; i < prices.length; i++) {
//       min = Math.min(min, prices[i]);
//       max = Math.max(max, prices[i] - min);
//     }
//     return max;
//   };
