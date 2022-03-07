const solution = (n, edges, s, e) => {
  edges.sort((a, b) => a[2] - b[2]);
  const graph = Array.from({ length: n + 1 }, () => Array());
  let lt = 1;
  let rt = Number.MAX_SAFE_INTEGER;
  let answer = 0;

  for (const [a, b, c] of edges) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  const BFS = weight => {
    const ch = new Array(n + 1).fill(0);
    const queue = [];
    queue.push([s, 0]);
    ch[s] = 1;
    while (queue.length) {
      const [x, _] = queue.shift();
      for (const [nx, maxWeight] of graph[x]) {
        if (maxWeight >= weight && ch[nx] === 0) {
          if (nx === e) return true;
          ch[nx] = 1;
          queue.push([nx, weight]);
        }
      }
    }
    return false;
  };

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (BFS(mid)) {
      answer = Math.max(answer, mid);
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
};

console.log(
  solution(
    5,
    [
      [1, 2, 5],
      [1, 3, 3],
      [1, 4, 2],
      [2, 4, 2],
      [3, 4, 4],
      [4, 5, 3],
    ],
    1,
    5
  )
);
