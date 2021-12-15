const solution = nums => {
  let N = nums.length;
  let maxNums = [...nums];
  let minNums = [...nums];

  for (let i = 1; i < N; i++) {
    maxNums[i] = Math.max(nums[i], maxNums[i - 1]);
  }

  for (let i = N - 2; i >= 0; i--) {
    minNums[i] = Math.min(nums[i], minNums[i + 1]);
  }

  for (let i = 0; i < N; i++) {
    if (maxNums[i] <= minNums[i + 1]) return i + 1;
  }
};

console.log(solution([5, 0, 3, 8, 6]));
console.log(solution([1, 1, 1, 0, 6, 12]));
console.log(solution([2, 5, 1, 4, 10, 11, 12]));
