const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');

const numOfStairs = Number(input.splice(0, 1));
const nums = input.map(x => Number(x));

const dp = Array.from({ length: numOfStairs }, () => 0);

dp[0] = nums[0];
dp[1] = nums[0] + nums[1];
dp[2] = Math.max(dp[0] + nums[2], nums[1] + nums[2]);

for (let i = 3; i < numOfStairs; i++) {
  dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 3] + nums[i - 1] + nums[i]);
}

console.log(dp[numOfStairs - 1]);
