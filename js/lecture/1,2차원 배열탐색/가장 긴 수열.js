const solution = nums => {
  let len = 1;
  const N = nums.length;
  const dp1 = new Array(N).fill(0);
  const dp2 = new Array(N).fill(0);

  dp1[0] = 1;
  dp2[N - 1] = 1;

  for (let i = 1; i < N; i++) {
    len = nums[i] > nums[i - 1] ? len + 1 : 1;
    dp1[i] = len;
  }

  len = 1;
  for (let i = N - 2; i >= 0; i--) {
    len = nums[i] > nums[i + 1] ? len + 1 : 1;
    dp2[i] = len;
  }

  return Math.max(Math.max(...dp1), Math.max(...dp2));
};

console.log(solution([5, 3, 6, 7, 9, 8, 5, 3, 1, 2]));
console.log(solution([5, 2, 4, 7, 6, 3, 9, 10, 11]));
console.log(solution([1, 2, 3, 3, 4, 5, 6, 7, 7]));
