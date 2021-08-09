const input = require('fs').readFileSync('./test.txt').toString().trim().split("\n");

input.splice(0,1);
let nums = input;

let target = 0;
let max = 0;
for(let i = 0; i < nums.length - 2; i++){
    for(let j = i + 1; j < nums.length - 1; j++){
        let cnt = 0;
        const d = Number(nums[j]) - Number(nums[i]);
        target = Number(nums[j]) + d;
        for(let k = j + 1; k < nums.length; k++){
            if(Number(nums[k]) === Number(target)){
                target += d;
                cnt++;
            }
        }
        max = Math.max(cnt, max);
    }
}
console.log(max + 2);