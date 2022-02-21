const solution = (nums, m) => {
  let lt = 0;
  let rt = 0;
  let sum = 0;
  let answer = 0;

  while (rt < nums.length) {
    sum += nums[rt];

    if (sum === m) answer++;

    while (sum > m) {
      sum -= nums[lt];
      if (sum === m) answer++;

      lt++;
    }

    rt++;
  }
  return answer;
};

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
console.log(solution([1, 1, 1, 1, 1, 1], 3));
console.log(solution([1, 2, 1, 2, 1, 2, 1], 3));
