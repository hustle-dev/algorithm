const solution = (nums, m, k) => {
  let answer = 0;

  function DFS(L, s, sum) {
    if (L === m) {
      if (sum % k === 0) answer++;
    } else {
      for (let i = s; i < nums.length; i++) {
        DFS(L + 1, i + 1, sum + nums[i]);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
};

console.log(solution([2, 4, 5, 8, 12], 3, 6));
console.log(solution([3, 5, 7, 8, 9, 12, 14], 4, 8));
