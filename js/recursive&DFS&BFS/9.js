const solution = (n, r) => {
  const dp = Array.from({ length: 35 }, () => Array(35).fill(0));

  function DFS(N, R) {
    if (dp[N][R] > 0) return dp[N][R];

    if (N === R || R === 0) return 1;
    else {
      dp[N][R] = DFS(N - 1, R - 1) + DFS(N - 1, R);
      return dp[N][R];
    }
  }

  const answer = DFS(n, r);

  return answer;
};

console.log(solution(5, 3));
console.log(solution(33, 19));
