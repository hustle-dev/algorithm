const input = require('fs').readFileSync('./test.txt').toString().trim().split("\n");

let s1 = input[0];
let s2 = input[1];

let len1 = s1.length;
let len2 = s2.length;

let dp = Array.from(Array(len1+1), () => Array(len2+1).fill(0));

for(let i = 1; i<=len1; i++){
    for(let j = 1; j<=len2; j++) {
        if(s1[i-1] === s2[j-1]) {
            dp[i][j] = dp[i-1][j-1] + 1;
        } else {
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
}

console.log(dp[len1][len2]);