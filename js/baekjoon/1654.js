const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');

const [K, N] = input[0].split(' ');
const arr = input.slice(1);

let lt = 0;
let rt = Number.MAX_SAFE_INTEGER;
let mid;

const count = len => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += Math.floor(Number(arr[i]) / len);
  }
  return count;
};

while (lt <= rt) {
  mid = Math.floor((lt + rt) / 2);
  if (count(mid) >= Number(N)) {
    answer = Number(mid);
    lt = Number(mid) + 1;
  } else {
    rt = Number(mid) - 1;
  }
}

console.log(answer);
