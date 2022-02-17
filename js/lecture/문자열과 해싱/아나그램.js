const solution = (s1, s2) => {
  const m = new Map();

  for (const s of s1) {
    m.set(s, m.get(s) + 1 || 1);
  }

  for (const s of s2) {
    if (!m.has(s)) return 'NO';

    m.set(s, m.get(s) - 1);

    if (m.get(s) === 0) m.delete(s);
  }

  return 'YES';
};

console.log(solution('AbaAeCe', 'baeeACA'));
console.log(solution('abaCC', 'Caaab'));
