const solution = m => {
  const s = new Set();
  const N = m.length - 1;
  const queue = [];
  queue.push(0);
  let L = 1;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const curX = queue.shift();
      for (let i = 1; i <= 6; i++) {
        let nx = curX + i + m[curX + i];
        if (nx < 0) {
          nx = 0;
        } else if (nx >= N) {
          nx = N;
        }
        if (nx === N) return L;
        s.add(nx);
      }
      queue.push(...[...s]);
      s.clear();
    }
    L++;
  }
};

// const s = new Set();
// const queue = [0];

// s.add(1);
// s.add(2);
// s.add(3);
// console.log([...s]);

// queue.push(...[...s]);
// console.log(queue);
// s.clear();
// console.log(queue);

// console.log(solution([0, 0, 0, 0, 0, 0, 0, 0, 0])); // 2
// console.log(solution([0, -1, 0, -2, 8, -2, 0, -2, 0])); // 1
console.log(
  solution([0, -9, -9, -9, 0, -9, -9, 10, -2, -1, -1, -1, -1, -1, 0, -2, -2, -1, -1, -1, 0])
); // 3
