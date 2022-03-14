const solution = (t, coins) => {
  const dp = new Array(t + 1).fill(0);
  dp[0] = 1;

  for (const [coin, count] of coins) {
    for (let i = t; i >= 0; i--) {
      for (let j = 1; j <= count; j++) {
        if (i - j * coin < 0) break;
        dp[i] += dp[i - j * coin];
      }
    }
  }

  return dp[t];
};

console.log(
  solution(20, [
    [5, 3],
    [10, 2],
    [1, 5],
  ])
);
