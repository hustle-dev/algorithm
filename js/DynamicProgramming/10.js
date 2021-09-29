function solution(t, coins) {
  const dp = Array.from({ length: t + 1 }, () => 0);

  dp[0] = 1;
  for (let [p, n] of coins) {
    for (let i = t; i >= 1; i--) {
      for (let k = 1; k <= n; k++) {
        if (i - p * k < 0) break;
        dp[i] += dp[i - p * k];
      }
    }
  }
  console.log(dp);
  return dp[t];
}

console.log(
  solution(20, [
    [5, 3],
    [10, 2],
    [1, 5],
  ])
);
