const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');

let T = Number(input[0]);
input.shift();
let numArr = input;
let answer = 0
let maxValue = 0;

for(let i = 0; i<numArr.length; i++) {
    if(maxValue < Number(numArr[i])) {
        maxValue = Number(numArr[i]);
    }
}

let dy = Array.from({length:maxValue+1}, () => 0);

dy[0] = 0;
dy[1] = 1;
dy[2] = 2;
dy[3] = 4;

for(let i = 4; i<=maxValue; i++) {
    dy[i] = (dy[i-1]) + (dy[i-2]) + (dy[i-3])
}

for(let i = 0; i<numArr.length; i++) {
    console.log(dy[Number(numArr[i])]);
}