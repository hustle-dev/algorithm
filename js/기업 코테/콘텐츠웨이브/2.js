function solution(stats) {
  stats.sort((a, b) => (a[0] < b[0] ? -1 : a[1] - b[1]));
  const N = stats.length;

  const dp = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    let atk = stats[i][0];
    let def = stats[i][1];
    let chain = 1;
    for (let j = i; j < N - 1; j++) {
      if (atk < stats[j + 1][0] && def < stats[j + 1][1]) {
        atk = stats[j + 1][0];
        def = stats[j + 1][1];
        chain += 1;
      }
    }
    dp[i] = chain;
  }

  return Math.max(...dp);
}
