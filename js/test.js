// const solution = (n, edges) => {
//   const graph = Array.from({ length: n }, () => new Array(n).fill(Number.MAX_SAFE_INTEGER));

//   for (const [a, b, c] of edges) {
//     graph[a - 1][b - 1] = c;
//   }

//   for (let i = 0; i < n; i++) {
//     graph[i][i] = 0;
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       for (let k = 0; k < n; k++) {
//         graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (graph[i][j] === Number.MAX_SAFE_INTEGER) graph[i][j] = 'M';
//     }
//   }

//   return graph;
// };

// console.log(
//   solution(5, [
//     [1, 2, 6],
//     [1, 3, 3],
//     [3, 2, 2],
//     [2, 4, 1],
//     [2, 5, 13],
//     [3, 4, 5],
//     [4, 2, 3],
//     [4, 5, 7],
//   ])
// );

const arr = [1, 2];
const arr2 = [3, 4];

arr.push(...arr2);

console.log(arr);
