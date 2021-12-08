const solution = (n, edges, distanceThreshold) => {
  const dist = Array.from({ length: n }, () => Array(n).fill(100000));
  const dp = Array(n).fill(0);
  let answer = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) dist[i][i] = 0;

  for (const [a, b, c] of edges) {
    dist[a][b] = c;
    dist[b][a] = c;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        dist[i][j] = Math.min(dist[i][k] + dist[k][j], dist[i][j]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dist[i][j] !== 0 && dist[i][j] <= distanceThreshold) {
        dp[i]++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (min >= dp[i]) {
      min = dp[i];
      answer = i;
    }
  }

  return answer;
};
