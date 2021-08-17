const input = require('fs').readFileSync('./test.txt').toString().trim().split("\n");

input.shift();

let answer = 0;
let stack = [];

for(let i = 0; i<input.length; i++) {
    if(Number(input[i]) === 0) {
        stack.pop();
    } else {
        stack.push(Number(input[i]));
    }
}

for(let x of stack) {
    answer += x;
}

console.log(answer);
