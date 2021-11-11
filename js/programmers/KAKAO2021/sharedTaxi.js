const solution = (n, s, a, b, fares) => {
  let answer = Number.MAX_SAFE_INTEGER;
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Number.MAX_SAFE_INTEGER));

  for (const [a, b, c] of fares) {
    graph[a][b] = c;
    graph[b][a] = c;
    graph[a][a] = 0;
    graph[b][b] = 0;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    answer = Math.min(answer, graph[i][a] + graph[i][b] + graph[i][s]);
  }

  answer = Math.min(answer, graph[s][a] + graph[s][b]);

  return answer;
};

console.log(
  solution(6, 4, 6, 2, [
    [4, 1, 10],
    [3, 5, 24],
    [5, 6, 2],
    [3, 1, 41],
    [5, 1, 24],
    [4, 6, 50],
    [2, 4, 66],
    [2, 3, 22],
    [1, 6, 25],
  ])
);

console.log(
  solution(7, 3, 4, 1, [
    [5, 7, 9],
    [4, 6, 4],
    [3, 6, 1],
    [3, 2, 3],
    [2, 1, 6],
  ])
);
console.log(
  solution(6, 4, 5, 6, [
    [2, 6, 6],
    [6, 3, 7],
    [4, 6, 7],
    [6, 5, 11],
    [2, 5, 12],
    [5, 3, 20],
    [2, 4, 8],
    [4, 3, 9],
  ])
);
