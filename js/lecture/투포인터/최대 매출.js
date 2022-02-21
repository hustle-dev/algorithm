const solution = (nums, k) => {
  let answer = 0;
  let sum = 0;

  let lt = 0;
  let rt = 0;

  while (rt < nums.length) {
    sum += nums[rt];

    if (rt - lt === k - 1) {
      answer = Math.max(answer, sum);
      sum -= nums[lt];
      lt++;
    }

    rt++;
  }

  return answer;
};

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5));
console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4));
