const solution = (nums, m) => {
  for (let i = 0; i < m; i++) {
    let newNums = [];
    for (let j = 0; j < nums.length - 1; j++) {
      newNums[j] = nums[j + 1] - nums[j];
    }
    nums = newNums;
  }
  return nums;
};

console.log(solution([5, 3, 7, 9, -2], 1));
console.log(solution([5, 3, 7, 9, -2], 2));
