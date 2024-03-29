const solution = (T, A) => {
  const n = T.length;
  const indegrees = new Array(n).fill(0);
  const graph = new Array(n).fill().map(() => new Array(0));
  const dp = new Array(n).fill(null).map(() => ({}));

  const findIndegree = (x, indegrees) => {
    if (x !== T[x]) {
      indegrees += 1;
      return findIndegree(T[x], indegrees);
    }

    return indegrees;
  };

  for (let i = 1; i < T.length; i++) {
    indegrees[i] = findIndegree(i, 0);
    graph[T[i]].push(i);
  }

  const q = [0];

  while (q.length) {
    const now = q.shift();

    for (const next of graph[now]) {
      dp[next] = { ...dp[next], ...dp[now], [now]: true };
      indegrees[next] -= 1;

      if (indegrees[next] === 0) q.push(next);
    }
  }

  let set = {};
  for (const skill of A) {
    set = { ...set, [skill]: true, ...dp[skill] };
  }
  return Object.keys(set).length;
};

console.log(solution([0, 0, 1, 1], [2]));
console.log(solution([0, 0, 0, 0, 2, 3, 3], [2, 5, 6]));
console.log(solution([0, 0, 1, 2], [1, 2]));
console.log(solution([0, 3, 0, 0, 5, 0, 5], [4, 2, 6, 1, 0]));
