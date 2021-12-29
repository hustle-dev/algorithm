const solution = n => {
  const m = new Map();
  const queue = [];
  queue.push(n);
  m.set(n, 1);
  let L = 0;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const v = queue.shift();
      if (v === 0) return L;
      if (!m.has(v - 1)) {
        queue.push(v - 1);
        m.set(v - 1, 1);
      }
      if (v % 2 === 0 && !m.has(v / 2)) {
        queue.push(v / 2);
        m.set(v / 2, 1);
      }
      if (v % 3 === 0 && !m.has(v / 3)) {
        queue.push(v / 3);
        m.set(v / 3, 1);
      }
    }
    L++;
  }
};
console.log(solution(10));
