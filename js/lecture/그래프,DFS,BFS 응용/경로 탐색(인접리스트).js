const solution = (n, edges) => {
  const graph = Array.from({ length: n + 1 }, () => Array());
  const ch = new Array(n + 1).fill(0);

  for (const [a, b] of edges) {
    graph[a].push(b);
  }

  let answer = 0;

  const DFS = L => {
    if (L === n) {
      answer += 1;
    } else {
      for (const x of graph[L]) {
        if (ch[x] === 0) {
          ch[x] = 1;
          DFS(x);
          ch[x] = 0;
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
