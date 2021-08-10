const input = require('fs').readFileSync('./test.txt').toString().trim().split("\n");


let m = Number(input[0].split(" ")[1]);
let treeArr = input[1].split(" ");

let lt = 1;
let rt = 1000000000;
let answer = 0;

function count(len) {
    let cnt = 0;
    for(let i = 0; i<treeArr.length; i++) {
        if(Number(treeArr[i]) > len) {
            cnt += Number(treeArr[i])-len;
        }
    }
    return cnt;
}

while(lt <= rt) {
    let mid = parseInt((lt+rt)/2);
    if(count(mid) >= m) {
        answer = mid;
        lt = mid+1;
    } else {
        rt = mid-1;
    }
}

console.log(answer);