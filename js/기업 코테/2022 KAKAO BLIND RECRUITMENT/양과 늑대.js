const solution = (info, edges) => {
  const graph = Array.from({ length: info.length }, () => Array());
  let ans = 0;

  for (const [a, b] of edges) {
    graph[a].push(b);
  }

  const DFS = (v, sheep, wolf, nv) => {
    const newNv = nv.concat(graph[v]);

    if (info[v] === 0) sheep += 1;
    else wolf += 1;

    ans = Math.max(ans, sheep);

    if (sheep === wolf) return;

    newNv.splice(newNv.indexOf(v), 1);

    for (const nextV of newNv) {
      DFS(nextV, sheep, wolf, newNv);
    }
  };

  DFS(0, 0, 0, [0]);

  return ans;
};

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);
console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
);
