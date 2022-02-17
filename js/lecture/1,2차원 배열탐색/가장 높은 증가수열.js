const solution = nums => {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      sum += nums[i + 1] - nums[i];
    } else {
      answer = Math.max(sum, answer);
      sum = 0;
    }
  }
  answer = Math.max(sum, answer);
  return answer;
};

console.log(solution([5, 2, 4, 7, 7, 3, 9, 10, 11]));
console.log(solution([8, 12, 2, 3, 7, 6, 20, 3]));
