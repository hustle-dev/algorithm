const solution = (n, nums, s1, s2) => {
  const unf = Array.from({ length: n + 1 }, (_, i) => i);

  const Find = v => {
    if (v === unf[v]) return v;
    else {
      unf[v] = Find(unf[v]);
      return unf[v];
    }
  };

  for (const [a, b] of nums) {
    const fa = Find(a);
    const fb = Find(b);

    if (fa !== fb) unf[fa] = fb;
  }

  return Find(s1) !== Find(s2) ? 'NO' : 'YES';
};

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
