function solution(nums, m) {
  let answer;

  for (let i = 0; i < m; i++) {
    answer = [];
    for (let j = 0; j < nums.length - 1; j++) {
      answer.push(nums[j + 1] - nums[j]);
    }
    nums = answer;
  }

  return answer;
}

console.log(solution([5, 3, 7, 9, -2], 2));
