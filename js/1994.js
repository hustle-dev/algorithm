const input = require('fs').readFileSync('./test.txt').toString().trim().split("\n");

input.splice(0,1);
let nums = input;

// const dist = Math.max(...nums) - Math.min(...nums);

// let dy = new Array(nums.length).fill(0).map(a => new Array(dist * 2 + 1).fill(1));

// for(let i = 0; i < nums.length; i++){
//     for(let k = 0; k < i; k++){
//         dy[i][nums[i] - nums[k] + dist] = dy[k][nums[i] - nums[k] + dist] + 1;
//     }
// }

// let max = 0;
// for(let i = 0; i < nums.length; i++){
//     max = dy.reduce((a, b) => Math.max(a, Math.max(...b)), 0);
// }

// console.log(max);


let n = nums.length;
let temp = [],
part = [],
answer = 0;

// 조합으로 모든 경우의 부분집합을 찾는다
function DFS(L, s) {
    if (temp.length !== 0) part.push(temp.slice());
    for (let i = s; i < n; i++) {
        temp.push(nums[i]);
        DFS(L + 1, i + 1);
        temp.pop();
    }
}
DFS(0, 0);

// 모든 경우의 수열을 돌며, 이게 등차수열인지 확인
for (let i = 0; i < part.length; i++) {
    let d = part[i][0] - part[i][1];
    let flag = true;
    for (let j = 1; j < part[i].length - 1; j++) {
        if (part[i][j] - part[i][j + 1] !== d) {
        flag = false;
        break; // 등차수열이 아님
        }
    }
    if (flag) { // 등차수열인 경우, 길이 값이 최대인지 확인
        answer = Math.max(answer, part[i].length);
    }
}
console.log(answer);