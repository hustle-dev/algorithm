const solution = (t, coins) => {
  const dp = Array(t + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    let [price, num] = coins[i];
    for (let j = t; j >= 0; j--) {
      for (let k = 1; k <= num; k++) {
        if (j - price * k < 0) break;
        dp[j] += dp[j - price * k];
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
