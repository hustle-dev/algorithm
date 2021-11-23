// function DFS(sum, temp, s) {
//     if(sum === target) {
//         answer.push([...temp]);
//         return;
//     }
//     for(let i = s; i < candidates.length; i++) {
//         if(i !== s && candidates[i] === candidates[i-1]) continue; //already return, go next loop(not recursion)
//         if(sum > target) return;
//         temp.push(candidates[i]);
//         DFS(sum+candidates[i], temp, i+1)
//         temp.pop();
//     }
// }

// DFS(0, [], 0)
