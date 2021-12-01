function solution(n, nums, s1, s2) {
  let unf = Array.from({ length: n + 1 }, (v, i) => i);

  function Find(v) {
    if (v === unf[v]) return v;
    else {
      unf[v] = Find(unf[v]);
      return unf[v];
    }
  }

  function Union(a, b) {
    let fa = Find(a);
    let fb = Find(b);
    if (fa !== fb) unf[fa] = fb;
  }

  for (let [a, b] of nums) {
    Union(a, b);
  }

  if (Find(s1) === Find(s2)) {
    return 'YES';
  } else {
    return 'NO';
  }
}

console.log(
  solution(
    9,
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 5],
      [6, 7],
      [7, 8],
      [8, 9],
    ],
    3,
    8
  )
);
