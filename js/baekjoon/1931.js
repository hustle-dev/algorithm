const input = require('fs').readFileSync('./test.txt').toString().trim().split("\n");

let N = input[0];
let meeting = [];
let answer = 0;

for(let i = 1; i<input.length; i++) {
    meeting.push(input[i].split(" "));
}

meeting.sort((a, b) => {
    if(a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
})

let et = 0;

for(let x of meeting) {
    if(Number(et) <= Number(x[0])) {
        et = x[1];
        answer++;
    }
}

console.log(answer);