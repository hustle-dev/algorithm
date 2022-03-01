const solution = (n, edges) => {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const ch = new Array(n + 1).fill(0);
  edges.forEach(([from, to]) => {
    graph[from][to] = 1;
  });
  let answer = 0;

  const DFS = L => {
    if (L === n) answer += 1;
    else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0 && graph[L][i] === 1) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  };

  ch[1] = 1;
  DFS(1);

  return answer;
};

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
