const solution = n => {
  const queue = [];
  const ch = Array(n + 1).fill(0);
  queue.push(n);
  ch[n] = 1;
  let L = 1;

  function BFS() {
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const v = queue.shift();
        if (v % 2 === 0 && v % 3 === 0) {
          for (const nv of [v - 1, v / 2, (v / 3) * 1]) {
            if (nv === 0) return L;
            if (ch[nv] === 0) {
              ch[nv] = 1;
              queue.push(nv);
            }
          }
        } else if (v % 3 === 0) {
          for (const nv of [v - 1, (v / 3) * 1]) {
            if (nv === 0) return L;
            if (ch[nv] === 0) {
              ch[nv] = 1;
              queue.push(nv);
            }
          }
        } else if (v % 2 === 0) {
          for (const nv of [v - 1, v / 2]) {
            if (nv === 0) return L;
            if (ch[nv] === 0) {
              ch[nv] = 1;
              queue.push(nv);
            }
          }
        } else {
          for (const nv of [v - 1]) {
            if (nv === 0) return L;
            if (ch[nv] === 0) {
              ch[nv] = 1;
              queue.push(nv);
            }
          }
        }
      }
      L++;
    }
  }

  return BFS();
};

console.log(solution(10));

// const solution = n => {
//   const m = new Map();
//   const queue = [];
//   queue.push(n);
//   let L = 0;
//   m.set(n, 1);

//   while (queue.length) {
//     const len = queue.length;
//     for (let i = 0; i < len; i++) {
//       const v = queue.shift();
//       if (v === 0) return L;
//       if (!m.has(v - 1)) {
//         m.set(v - 1, 1);
//         queue.push(v - 1);
//       }
//       if (v % 2 === 0 && !m.has(v / 2)) {
//         m.set(v / 2, 1);
//         queue.push(v / 2);
//       }
//       if (v % 3 === 0 && !m.has(v / 3)) {
//         m.set(v / 3, 1);
//         queue.push(v / 3);
//       }
//     }
//     L++;
//   }
// };
