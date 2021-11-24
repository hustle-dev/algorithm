function solution(n, edges) {
  let answer = 0;
  const graph = Array.from({ length: n + 1 }, () => Array());
  const ch = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  function DFS(L) {
    for (let nv of graph[L]) {
      if (ch[nv] === 0) {
        ch[nv] = 1;
        DFS(nv);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (ch[i] === 0) {
      ch[i] = 1;
      DFS(i);
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(7, [
    [1, 2],
    [2, 3],
    [1, 4],
    [1, 5],
  ])
);
