const input = require('fs').readFileSync('./test.txt').toString().trim().split("\n");

input.shift();
let numArr = input[0].split(" ");
let x = Number(input[1]);

numArr.sort((a, b) => Number(a) - Number(b));

let answer = 0;
let lt = 0;
let rt = numArr.length-1;

while(lt < rt) {
    if((Number(numArr[lt]) + Number(numArr[rt])) === x) {
        answer++;
        lt++;
        rt--;
    } else if((Number(numArr[lt]) + Number(numArr[rt])) < x) {
        lt++;
    } else {
        rt--;
    }
}

console.log(answer);