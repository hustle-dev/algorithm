const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");


const N = Number(input[0].split(" ")[0]);
const K = Number(input[0].split(" ")[1]);

const numArr = input[1].split(" ");

let sum = 0;
let lt = 0;
let rt = 0;
let maxSum = Number.MIN_SAFE_INTEGER;

for(; rt<K-1; rt++) {
    sum += Number(numArr[rt]);
}

for(rt = K-1; rt<N; rt++) {
    sum += Number(numArr[rt]);
    maxSum = Math.max(maxSum, sum);
    sum -= Number(numArr[lt++]);
}

console.log(maxSum);