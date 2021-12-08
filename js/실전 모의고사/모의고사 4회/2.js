// const solution = s => {
//   let answer = 0;
//   const dp = [];
//   const m = new Map();
//   for (const c of s) m.set(c, m.get(c) + 1 || 1);
//   for (const v of [...m.values()]) {
//     if (dp[v]) {
//       let nv = v - 1;
//       while (nv > 0) {
//         if (dp[nv]) nv--;
//         else {
//           answer += v - nv;
//           dp[nv] = 1;
//           break;
//         }
//       }
//       if (nv === 0) answer += v;
//     } else dp[v] = 1;
//   }
//   return answer;
// };

// ------

// const solution = s => {
//   const dp = new Array(26).fill(0);
//   for (const c of s) {
//     dp[c.charCodeAt() - 97] += 1;
//   }
//   dp.sort((a, b) => a - b);

//   let answer = 0;
//   let desc = dp[25];

//   for (let i = 25; i >= 0; i--) {
//     if (dp[i] === 0) break;
//     if (dp[i] > desc) {
//       answer += dp[i] - desc;
//     } else {
//       desc = dp[i];
//     }
//     if (desc > 0) desc--;
//   }
//   return answer;
// };
