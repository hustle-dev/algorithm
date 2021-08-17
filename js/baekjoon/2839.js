const input = require('fs').readFileSync('./test.txt').toString().trim();


let answer = 0;
let num = input;


while(num > 0) {
    if(num % 5 === 0) {
        num -= 5;
        answer++;
    }
    else if(num % 3 === 0) {
        num -= 3;
        answer++;
    }
    else if(num > 5) {
        answer++;
        num -= 5;
    }
    else {
        break;
    }
}
if(num > 0) {
    console.log(-1);
} else {
    console.log(answer);
}