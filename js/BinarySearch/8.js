function solution(N, edges, s, e) {
  let answer = 0;
  const graph = Array.from({ length: N + 1 }, () => Array());
  const ch = Array.from({ length: N + 1 }, () => 0);
  let lt = 0;
  let rt = Number.MAX_SAFE_INTEGER;

  for (const [a, b, c] of edges) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  function BFS(weight) {
    const queue = [];
    queue.push(s);
    ch[s] = 1;
    while (queue.length) {
      let v = queue.shift();
      for (let [nv, maxWeight] of graph[v]) {
        if (ch[nv] === 0 && maxWeight >= weight) {
          if (nv === e) return true;
          ch[nv] = 1;
          queue.push(nv);
        }
      }
    }
    return false;
  }

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (BFS(mid)) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

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
