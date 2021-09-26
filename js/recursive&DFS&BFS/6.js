function solution(nums, m) {
  let answer = 0;
  const total = nums.reduce((acc, cur) => acc + cur[0], 0);

  function DFS(L, sum, time, tsum) {
    if (time > m) return;

    if (sum + (total - tsum) < answer) return;

    if (L === nums.length) {
      answer = Math.max(sum, answer);
    } else {
      DFS(L + 1, sum + nums[L][0], time + nums[L][1], tsum + nums[L][0]);
      DFS(L + 1, sum, time, tsum + nums[L][0]);
    }
  }

  DFS(0, 0, 0, 0);
  return answer;
}

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
