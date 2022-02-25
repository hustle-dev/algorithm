const solution = nums => {
  const total = nums.reduce((acc, cur) => acc + cur, 0);
  let flag = false;

  const DFS = (L, sum) => {
    if (flag) return;
    if (L === nums.length) {
      if (total - sum === sum) flag = true;
      return;
    } else {
      DFS(L + 1, sum + nums[L]);
      DFS(L + 1, sum);
    }
  };

  DFS(0, 0);
  return flag ? 'YES' : 'NO';
};

console.log(solution([1, 3, 5, 6, 7, 10]));
console.log(solution([5, 2, 6, 9, 10, 12]));
console.log(solution([3, 9, 11, 13]));
