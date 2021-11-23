const solution = (s, e) => {
  let L = 1;
  const ch = Array(10001).fill(0);

  function BFS() {
    const queue = [];
    queue.push(s);
    ch[s] = 1;
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        let v = queue.shift();
        for (let nv of [v - 1, v + 1, v + 5]) {
          if (nv === e) return L;

          if (nv >= 0 && nv <= 10000 && ch[nv] === 0) {
            ch[nv] = 1;
            queue.push(nv);
          }
        }
      }
      L++;
    }
  }

  const answer = BFS();

  return answer;
};

console.log(solution(8, 3));
