const solution = (n, edges) => {
  edges.sort((a, b) => a[2] - b[2]);
  const unf = Array.from({ length: n }, (_, i) => i);
  let minimumCost = 0;

  const Find = v => {
    if (v === unf[v]) return v;
    else {
      unf[v] = Find(unf[v]);
      return unf[v];
    }
  };

  for (const [a, b, c] of edges) {
    const fa = Find(a);
    const fb = Find(b);

    if (fa !== fb) {
      unf[fa] = fb;
      minimumCost += c;
    }
  }

  return minimumCost;
};

console.log(
  solution(9, [
    [1, 2, 12],
    [1, 9, 25],
    [2, 3, 10],
    [2, 8, 17],
    [2, 9, 8],
    [3, 4, 18],
    [3, 7, 55],
    [4, 5, 44],
    [5, 6, 60],
    [5, 7, 38],
    [7, 8, 35],
    [8, 9, 15],
  ])
);
