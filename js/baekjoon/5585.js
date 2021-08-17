const input = require('fs').readFileSync('./test.txt').toString().trim();


let answer = 0;
let num = (1000-input);
let coin = [1, 5, 10, 50, 100, 500];

for(let i = coin.length-1; i>= 0; i--) {
    answer += parseInt(num / coin[i]);
    num = num % coin[i];
}

console.log(answer);