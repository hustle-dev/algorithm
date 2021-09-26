function solution(nums) {
  let answer = 'NO';
  const total = nums.reduce((acc, cur) => acc + cur, 0);
  let flag = false;

  function DFS(L, sum) {
    if (flag) return;

    if (L === nums.length) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = true;
      }
    } else {
      DFS(L + 1, sum + nums[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution([3, 9, 11, 13]));
