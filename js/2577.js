const input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let nums = 1;
let sH = new Map();
for(let i = 0; i<input.length; i++) {
    nums *= input[i];
}

let numString = String(nums);

for(let x of numString) {
    sH.set(x, sH.get(x) + 1 || 1);
}

for(let i = 0; i<10; i++) {
    if(sH.has(String(i))) {
        console.log(sH.get(String(i)))
    } else {
        console.log(0);
    }
}