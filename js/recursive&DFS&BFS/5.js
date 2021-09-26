function solution(nums, c) {
  let answer = 0;
  const total = nums.reduce((acc, cur) => acc + cur, 0);

  function DFS(L, sum, tsum) {
    if (sum > c) return;

    if (sum + (total - tsum) < answer) return;

    if (L === nums.length) {
      if (sum <= c) answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + nums[L], tsum + nums[L]);
      DFS(L + 1, sum, tsum + nums[L]);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379));
