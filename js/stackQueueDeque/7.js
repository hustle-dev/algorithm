function solution(nums, k) {
  const answer = [];
  const stack = [];

  for (let i = 0; i < k - 1; i++) {
    stack.push(nums[i]);
  }

  for (let i = k - 1; i < nums.length; i++) {
    stack.push(nums[i]);
    answer.push(Math.min(...stack));
    stack.shift();
  }
  return answer;
}

console.log(solution([11, 12, 15, 20, 25, 10, 20, 13, 15, 19], 3));
