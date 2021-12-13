// const solution = matrix => {
//   const M = matrix.length;
//   const N = matrix[0].length;
//   const min = Math.min(M, N);
//   let max = 0;

//   for (let i = 0; i < M; i++) {
//     for (let j = 0; j < N; j++) {
//       if (matrix[i][j] === 1) {
//         max = 1;
//         break;
//       }
//     }
//   }

//   for (let k = 2; k <= min; k++) {
//     for (let i = 0; i <= M - k; i++) {
//       for (let j = 0; j <= N - k; j++) {}
//     }
//   }
// };

// console.log(
//   solution([
//     ['1', '0', '1', '0', '0'],
//     ['1', '0', '1', '1', '1'],
//     ['1', '1', '1', '1', '1'],
//     ['1', '0', '0', '1', '0'],
//   ])
// );
