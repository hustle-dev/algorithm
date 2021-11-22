const solution = (s1, s2) => {
  const dp = Array.from({ length: s1.length + 1 }, () => Array(s2.length + 1).fill(0));

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[s1.length][s2.length];
};

console.log(solution('acbehf', 'abefc'));
