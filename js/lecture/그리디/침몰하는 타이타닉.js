const solution = (nums, m) => {
  nums.sort((a, b) => a - b);

  let lt = 0;
  let rt = nums.length - 1;

  let cnt = 0;

  while (lt <= rt) {
    if (nums[lt] + nums[rt] <= m) {
      lt++;
    }
    rt--;
    cnt += 1;
  }

  return cnt;
};

console.log(solution([90, 50, 70, 100, 60], 140));
