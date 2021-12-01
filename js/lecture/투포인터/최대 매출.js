function solution(nums, k) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < k - 1; i++) {
    sum += nums[i];
  }

  for (let i = k - 1; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);
    sum -= nums[i - (k - 1)];
  }

  return max;
}

console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4));
