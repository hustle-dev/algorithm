// const solution = (s, e) => {
//   let L = 1;
//   const BFS = () => {
//     const queue = [];
//     queue.push(s);
//     while (queue.length) {
//       const len = queue.length;
//       const ns = new Set();
//       for (let i = 0; i < len; i++) {
//         const v = queue.shift();

//         for (const nv of [v - 1, v + 1, v + 5]) {
//           if (nv === e) return L;
//           ns.add(nv);
//         }
//       }
//       queue.push(...ns);
//       L++;
//     }
//   };

//   return BFS();
// };
const solution = (s, e) => {
  let L = 1;
  const BFS = () => {
    const ch = new Array(10001).fill(0);
    const queue = [];
    queue.push(s);
    ch[s] = 1;
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const v = queue.shift();

        for (const nv of [v - 1, v + 1, v + 5]) {
          if (nv === e) return L;
          if (nv > 0 && nv <= 10000 && ch[nv] === 0) {
            ch[nv] = 1;
            queue.push(nv);
          }
        }
      }
      L++;
    }
  };

  return BFS();
};

console.log(solution(5, 14));
console.log(solution(8, 3));
