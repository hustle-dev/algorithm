const solution = events => {
  const arr = [];
  for (const [start, end, value] of events) {
    arr.push([start, value, 1]);
    arr.push([end, value, -1]);
  }

  arr.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return a[2] - b[2];
  });

  let maxSum = 0;
  let val = 0;

  for (const [, sum, flag] of arr) {
    if (flag === -1) {
      maxSum = Math.max(maxSum, sum);
    } else {
      val = Math.max(val, maxSum + sum);
    }
  }
  return val;
};

console.log(
  solution([
    [10, 83, 53],
    [63, 87, 45],
    [97, 100, 32],
    [51, 61, 16],
  ])
); // 85

// console.log(
//   solution([
//     [1, 3, 2],
//     [4, 5, 2],
//     [1, 5, 5],
//   ])
// ); // 5

// console.log(
//   solution([
//     [1, 5, 3],
//     [1, 5, 1],
//     [6, 6, 5],
//   ])
// ); // 8
