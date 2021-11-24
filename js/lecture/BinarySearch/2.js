// 크루스칼 --> 그리디

function solution(n, edges) {
  let sum = 0;
  let unf = Array.from({ length: n + 1 }, (v, i) => i);

  edges.sort((a, b) => a[2] - b[2]);

  function Find(v) {
    if (v === unf[v]) return v;
    else {
      unf[v] = Find(unf[v]);
      return unf[v];
    }
  }

  function Union(a, b, c) {
    let fa = Find(a);
    let fb = Find(b);
    if (fa !== fb) {
      unf[fa] = fb;
      sum += c;
    }
  }

  for (let [a, b, c] of edges) {
    Union(a, b, c);
  }

  return sum;
}

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
