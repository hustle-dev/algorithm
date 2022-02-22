const solution = (nums, m) => {
  let answer = 0;
  let sum = 0;
  let lt = 0;
  let rt = 0;

  while (rt < nums.length) {
    sum += nums[rt];

    while (sum > m) {
      sum -= nums[lt];
      lt++;
    }
    answer += rt - lt + 1;
    rt++;
  }

  return answer;
};

console.log(solution([1, 3, 1, 2, 3], 5));
console.log(solution([1, 1, 1, 1, 1, 1], 3));
console.log(solution([1, 1, 2, 2, 1, 2, 1, 3, 2], 5));
