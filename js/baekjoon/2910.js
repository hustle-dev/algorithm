const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');

const [N, C] = input[0].split(' ');
const numArr = input[1].split(' ');
let answer = '';

const nH = new Map();

for (let i = 0; i < Number(N); i++) {
  nH.set(numArr[i], nH.get(numArr[i]) + 1 || 1);
}

const sortArr = [...nH.keys()].sort((a, b) => nH.get(b) - nH.get(a));

for (let i = 0; i < sortArr.length; i++) {
  for (let j = 0; j < nH.get(sortArr[i]); j++) {
    answer += Number(sortArr[i]) + ' ';
  }
}

console.log(answer);
