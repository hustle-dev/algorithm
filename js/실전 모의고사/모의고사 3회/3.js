function solution(times) {
  times.sort((a, b) => a[0] - b[0]);
  const N = 73;

  const dp = Array(N + 1).fill(0);

  for (let [arrive, leave] of times) {
    for (let i = arrive; i < leave; i++) {
      dp[i] += 1;
    }
  }

  return Math.max(...dp);
}
