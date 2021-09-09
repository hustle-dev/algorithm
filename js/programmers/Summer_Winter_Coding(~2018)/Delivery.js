function solution(N, road, K) {
  let answer = 0;

  let graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(1000001));

  road.sort((a, b) => b[2] - a[2]);

  for (let [a, b, c] of road) {
    graph[a][b] = c;
    graph[b][a] = c;
    graph[a][a] = 0;
    graph[b][b] = 0;
  }

  console.log(graph);

  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  console.log(graph);

  for (let i = 1; i < graph[1].length; i++) {
    if (graph[1][i] <= K) {
      answer += 1;
    }
  }

  return answer;
}

console.log(
  solution(
    5,
    [
      [1, 2, 100],
      [1, 5, 2],
      [1, 3, 4],
      [1, 4, 6],
      [2, 5, 4],
      [2, 5, 120],
    ],
    10
  )
);
