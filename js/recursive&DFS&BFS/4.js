const solution = nums => {
  let answer = 'NO';
  let flag = false;
  const total = nums.reduce((acc, cur) => acc + cur, 0);

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
};

console.log(solution([1, 3, 5, 6, 7, 10]));
console.log(solution([5, 2, 6, 9, 10, 12]));
console.log(solution([3, 9, 11, 13]));
