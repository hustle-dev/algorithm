// function solution(s, e) {
//     let answer = 0;
//     let ch = Array(10001).fill(0);

//     function BFS() {
//         let queue = [];
//         let cnt = 0;
//         queue.push(s);
//         while(queue.length) {
//             let len = queue.length;
//             for(let i = 0; i<len; i++) {
//                 let v = queue.shift();
//                 for(let nv of [v-1, v+1, v+5]) {
//                     if(ch[nv] === 0 && nv > 0 && nv <= 10000) {
//                         if(nv === e) {
//                             return cnt+1;
//                         }
//                         ch[nv] = 1;
//                         queue.push(nv);
//                     } else {
//                         continue;
//                     }
//                 }
//             }
//             cnt++;
//         }
//         return 0;
//     }

//     ch[s] = 1;
//     answer = BFS();
//     return answer;
// }

// console.log(solution(8, 3));

let count = 0;
function isValid (stack) {
    let temp = [];
    for(let i = 0; i<stack.length; i++) {
        if(stack[i] === '(') {
            temp.push('(');
        } else if(stack[i] === ')') {
            if(temp.length === 0 || temp[temp.length-1] === ')') {
                temp.push(')');
            }
            else temp.pop();
        }
    }
    return temp.length;
}

function solution(n) {
    let answer= [];
    let tempArr = [];
    let ch = Array.from({length: (n*2)+1}, () => 0);
    let temp = [];
    let nS = new Set();

    for(let i = 0; i<n; i++) {
        tempArr.push('(');
    }
    for(let i = 0; i<n;i ++) {
        tempArr.push(')');
    }

    function DFS(L) {
        count++;
        if(L === n*2) {
            if(!isValid(temp)) {
                nS.add(temp.slice().join(""));
            }
        } else {
            for(let i = 0; i<n*2; i++) {
                if(ch[i] === 0) {
                    ch[i] = 1;
                    temp.push(tempArr[i]);
                    DFS(L+1);
                    temp.pop();
                    ch[i] = 0;
                }
            }
        }
    }
    DFS(0);

    answer = Array.from(nS);
    console.log(count);
    return answer;
}

console.log(solution(3));