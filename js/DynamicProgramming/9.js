function solution(s1, s2) {
  const N = s1.length + 1;
  const M = s2.length + 1;
  const dp = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    dp[i][0] = i;
  }

  for (let i = 0; i < M; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i < N; i++) {
    for (let j = 1; j < M; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
      }
    }
  }

  console.log(dp);
  return dp[N - 1][M - 1];
}

console.log(solution('aabab', 'babb'));
