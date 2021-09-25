function solution(nums, m) {
  for (let i = 0; i < m; i++) {
    const maxV = nums.indexOf(Math.max(...nums));
    const minV = nums.indexOf(Math.min(...nums));

    nums[maxV] -= 1;
    nums[minV] += 1;
  }

  return Math.max(...nums) - Math.min(...nums);
}

console.log(solution([1, 0, 3, 7, 5], 2));
