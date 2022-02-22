const solution = (s, t) => {
  const m = new Map();
  let lt = 0;
  let answer = 0;

  for (const s of t) {
    m.set(s, m.get(s) + 1 || 1);
  }

  for (let i = 0; i < t.length - 1; i++) {
    if (m.get(s[i]) === 1) m.delete(s[i]);
    else m.set(s[i], m.get(s[i]) - 1 || -1);
  }

  for (let i = t.length - 1; i < s.length; i++) {
    if (m.get(s[i]) === 1) m.delete(s[i]);
    else m.set(s[i], m.get(s[i]) - 1 || -1);
    if (m.size === 0) answer++;
    if (m.get(s[lt]) === -1) m.delete(s[lt]);
    else m.set(s[lt], m.get(s[lt]) + 1 || 1);
    lt++;
  }

  return answer;
};

console.log(solution('bacacbcba', 'abc'));
console.log(solution('bacaAacba', 'abc'));
console.log(solution('aaabc', 'abc'));
