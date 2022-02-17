const solution = s => {
  const m = new Map();

  for (const c of s) {
    m.set(c, m.get(c) + 1 || 1);
  }

  return [...m.entries()].sort((a, b) => b[1] - a[1])[0][0];
};

console.log(solution('BACBACCACCBDEDE'));
