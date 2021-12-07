const solution = (s, k) => {
  const maxUnique = new Set(s).size;
  let max = 0;

  for (let curUnique = 1; curUnique <= maxUnique; curUnique++) {
    let lt = 0;
    let m = new Map();
    let atLeastK = 0;
    let unique = 0;
    for (let rt = 0; rt < s.length; rt++) {
      m.set(s[rt], m.get(s[rt]) + 1 || 1);

      if (m.get(s[rt]) === 1) unique++;
      if (m.get(s[rt]) === k) atLeastK++;

      while (unique > curUnique) {
        m.set(s[lt], m.get(s[lt]) - 1);
        if (m.get(s[lt]) === k - 1) atLeastK--;
        if (m.get(s[lt]) === 0) unique--;
        lt++;
      }

      if (unique === curUnique && unique === atLeastK) {
        max = Math.max(max, rt - lt + 1);
      }
    }
  }

  return max;
};

console.log(solution('aaabb', 3));
console.log(solution('ababbc', 2));
