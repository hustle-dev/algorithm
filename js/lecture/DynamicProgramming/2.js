const solution = n => {
  const dp = Array(n).fill(0);

  dp[1] = 2;
  dp[2] = 3;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
};

console.log(solution(7));
