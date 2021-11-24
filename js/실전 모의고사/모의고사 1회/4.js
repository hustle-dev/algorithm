const solution = (nums, k) => {
  nums.sort((a, b) => a - b);
  let left = 0;
  let cur = 0;
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    cur += nums[i];

    while ((i - left + 1) * nums[i] > cur + k) {
      cur -= nums[left++];
    }

    answer = Math.max(answer, i - left + 1);
  }

  return answer;
};

console.log(solution([5, 7, 8, 2, 9, 6, 3], 10));
