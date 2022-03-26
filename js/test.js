const solution = (n, m, room, bath) => {
  let answer = 0;
  const matrix = Array.from({ length: n }, () => Array(m).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  // const factorial = n => {
  //   if (n === 1) return n;
  //   return n * factorial(n - 1);
  // };

  // const duplicate = factorial(room) * factorial(bath);

  // const DFS = ()

  // for(let i = 0; i<room; i++) {

  //   for(let j = 0; j<bath; j++) {

  //   }
  // }

  console.log(matrix);
};

console.log(solution(4, 5, 3, 1)); // 20
console.log(solution(2, 3, 1, 1)); // 0
console.log(solution(3, 4, 2, 1)); // 0
console.log(solution(2, 4, 1, 1)); // 6
