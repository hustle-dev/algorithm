const solution = (n, relations) => {
  const nH = new Map();
  const obj = {};

  for (const [X, Y, K] of relations) {
    if (obj[X] === undefined) obj[X] = [];
    obj[X] = [...obj[X], [Y, K]];
  }

  function BFS() {
    const queue = [[n, 1]];
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const [X, num] = queue.shift();
        if (obj[X] === undefined) {
          nH.set(X, (nH.get(X) || 0) + num);
          break;
        }
        for (let j = 0; j < obj[X].length; j++) {
          queue.push([obj[X][j][0], obj[X][j][1] * num]);
        }
      }
    }
  }

  BFS();

  return [...nH.entries()].sort((a, b) => a[0] - b[0]);
};

console.log(
  solution(7, [
    [5, 1, 2],
    [5, 2, 2],
    [7, 5, 2],
    [6, 5, 2],
    [6, 3, 3],
    [6, 4, 4],
    [7, 6, 3],
    [7, 4, 5],
  ])
);

// DFS 버전

const solution = (n, relations) => {
  const answer = [];
  const result = Array(n + 1).fill(0);
  const toy = Array.from({ length: n + 1 }, () => Array());

  for (const [a, b, cost] of relations) {
    toy[a].push([b, cost]);
  }

  function DFS(v, sum) {
    let flag = 1;
    for (const [nv, cost] of toy[v]) {
      flag = 0;
      DFS(nv, sum * cost);
    }
    if (flag === 1) result[v] += sum;
  }
  DFS(n, 1);

  for (let i = 1; i <= n; i++) {
    if (result[i] > 0) answer.push([i, result[i]]);
  }

  return answer;
};

console.log(
  solution(7, [
    [5, 1, 2],
    [5, 2, 2],
    [7, 5, 2],
    [6, 5, 2],
    [6, 3, 3],
    [6, 4, 4],
    [7, 6, 3],
    [7, 4, 5],
  ])
);
