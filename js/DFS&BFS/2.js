function solution(n, edges) {
  let answer = 0;
  const graph = Array.from({ length: n + 1 }, () => Array());
  const ch = Array.from({ length: n + 1 }, () => 0);
  const temp = [];

  for (let [a, b] of edges) {
    graph[a].push(b);
  }

  function DFS(L) {
    if (L === n) {
      console.log(temp);
      answer++;
    } else {
      for (let nv of graph[L]) {
        if (ch[nv] === 0) {
          ch[nv] = 1;
          temp.push(nv);
          DFS(nv);
          temp.pop();
          ch[nv] = 0;
        }
      }
    }
  }

  temp.push(1);
  ch[1] = 1;
  DFS(1);

  return answer;
}

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
