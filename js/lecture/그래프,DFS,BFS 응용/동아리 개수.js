const solution = (n, edges) => {
  const graph = Array.from({ length: n + 1 }, () => Array());
  const ch = new Array(n + 1).fill(0);
  let answer = 0;

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const DFS = L => {
    for (const x of graph[L]) {
      if (ch[x] === 0) {
        ch[x] = 1;
        DFS(x);
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    if (ch[i] === 0) {
      ch[i] = 1;
      DFS(i);
      answer += 1;
    }
  }

  return answer;
};

console.log(
  solution(7, [
    [1, 2],
    [2, 3],
    [1, 4],
    [1, 5],
  ])
);
