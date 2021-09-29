function solution(s1, s2) {
  const N = s1.length;
  const M = s2.length;
  const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (s1[i] === s2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }
  return dp[N][M];
}

console.log(solution('acbehf', 'abefc'));
