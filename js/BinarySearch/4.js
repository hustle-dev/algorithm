function solution(matrix, target) {
  let lt = 0;
  let rt = matrix[0].length - 1;

  while (true) {
    if (matrix[lt][rt] === target) {
      return [lt, rt];
    } else if (matrix[lt][rt] > target) {
      rt--;
    } else {
      lt++;
    }
  }
}

console.log(
  solution(
    [
      [1, 6, 9, 12],
      [3, 7, 10, 14],
      [5, 8, 13, 17],
      [15, 18, 20, 23],
    ],
    18
  )
);

// 2차원 배열의 각 행과 각 열이 오름차순으로 되어있을 때만
// 이렇게 이분검색으로 찾는 것이 가능!
