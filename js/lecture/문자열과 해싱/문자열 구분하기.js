const solution = words => {
  const N = words.length;

  words.sort((a, b) => a.length - b.length);

  for (let i = 0; i < words[0].length; i++) {
    const m = new Map();
    for (let j = 0; j < N; j++) {
      m.set(words[j][i], m.get(words[j][i]) + 1 || 1);
    }
    if (m.size === N) return i + 1;
  }

  return 0;
};

console.log(solution(['seeasue', 'sesseysu', 'semeas']));
console.log(solution(['ackky', 'kabck', 'yokkcs']));
console.log(solution(['longlong', 'longtong', 'longbig']));
