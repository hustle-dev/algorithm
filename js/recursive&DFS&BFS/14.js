function solution(s, e) {
  let answer = 0;
  const ch = new Array(10001).fill(0);

  function BFS() {
    const queue = [];
    let L = 0;
    queue.push(s);
    ch[s] = 1;
    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let v = queue.shift();
        for (let nv of [v - 1, v + 1, v + 5]) {
          if (nv === e) return L + 1;

          if (nv >= 1 && nv <= 10000 && ch[nv] === 0) {
            ch[nv] = 1;
            queue.push(nv);
          }
        }
      }
      L += 1;
    }
  }

  answer = BFS();
  return answer;
}

console.log(solution(8, 3));
