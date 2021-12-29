const solution = (nums, k) => {
  if (nums.length % k !== 0) return 'NO';
  nums.sort((a, b) => a - b);
  const m = new Map();
  nums.forEach(n => m.set(n, m.get(n) + 1 || 1));

  for (const [key, val] of m) {
    for (let i = 0; i < val; i++) {
      let curKey = key;
      while (curKey < key + k) {
        if (!m.has(curKey)) return 'NO';
        else {
          m.set(curKey, m.get(curKey) - 1);
          if (m.get(curKey) === 0) m.delete(curKey);
          curKey++;
        }
      }
    }
  }
  return 'YES';
};
