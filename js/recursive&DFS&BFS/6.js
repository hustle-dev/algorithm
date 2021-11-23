const solution = (nums, m) => {
  let answer = 0;

  function DFS(L, time, score) {
    if (L === nums.length) {
      if (time <= m) {
        answer = Math.max(answer, score);
      }
    } else {
      DFS(L + 1, time + nums[L][1], score + nums[L][0]);
      DFS(L + 1, time, score);
    }
  }

  DFS(0, 0, 0);
  return answer;
};

console.log(
  solution(
    [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4],
    ],
    20
  )
);

console.log(
  solution(
    [
      [15, 6],
      [30, 11],
      [23, 8],
      [14, 4],
      [10, 3],
      [20, 7],
    ],
    25
  )
);
