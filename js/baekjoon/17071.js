const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const s = Number(input[0]);
let e = Number(input[1]);

let answer = 0;

const ch = Array.from({ length: 500001 }, () => new Array(2).fill(0));

function BFS() {
  const queue = [[s, 1]];
  let L = 1;
  while (queue.length) {
    e += L;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [v, second] = queue.shift();
      for (const nv of [v - 1, v + 1, v * 2]) {
        if (e >= 0 && e <= 500000 && ch[e][L % 2] === 1) return L;

        if (nv >= 0 && nv <= 500000 && e >= 0 && e <= 500000 && ch[nv][L % 2] === 0) {
          if (nv === e) return L;

          ch[nv][L % 2] = 1;
          queue.push([nv, L]);
        }
      }
    }
    L++;
  }
  return -1;
}

if (s === e) {
  answer = 0;
} else {
  ch[s][0] = 1;
  answer = BFS();
}

console.log(answer);
