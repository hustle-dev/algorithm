const solution = (nums, m) => {
  for (let i = 0; i < m; i++) {
    const max = nums.indexOf(Math.max(...nums));
    const min = nums.indexOf(Math.min(...nums));

    nums[max] -= 1;
    nums[min] += 1;
  }

  return Math.max(...nums) - Math.min(...nums);
};

console.log(solution([2, 1, 3, 7, 5], 2));
