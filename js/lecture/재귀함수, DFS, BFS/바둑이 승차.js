const solution = (nums, c) => {
  let answer = 0;
  const total = nums.reduce((acc, cur) => acc + cur, 0);

  const DFS = (L, sum, tsum) => {
    if (total - tsum + sum < answer) return;
    if (sum > c) return;
    if (L === nums.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + nums[L], tsum + nums[L]);
      DFS(L + 1, sum, tsum + nums[L]);
    }
  };
  DFS(0, 0, 0);
  return answer;
};

console.log(solution([81, 58, 42, 33, 61], 259));
console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379));
