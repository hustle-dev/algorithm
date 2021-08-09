const input = require('fs').readFileSync('./test.txt').toString().trim().split("\n");

let M = Number(input[0].split(" ")[1]);
let numArr = input[1].split(" ");

let answer = 0;
let lt = 0;
let rt = 0;
let sum = 0;

while(lt <= rt && rt < numArr.length) {
    sum += Number(numArr[rt]);
    if(sum === M) {
        answer++;
    } else {
        if(sum > M) {
            while(sum > M) {
                sum -= Number(numArr[lt]);
                lt++;
                if(sum === M) {
                    answer++;
                }
            }
        }
    }
    rt++;
}

console.log(answer);