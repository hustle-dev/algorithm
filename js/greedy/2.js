function solution(nums, m) {
  let answer = 0;
  nums.sort((a, b) => a - b);
  let lt = 0;
  let rt = nums.length - 1;

  while (lt <= rt) {
    if (nums[rt] + nums[lt] <= m) {
      answer += 1;
      rt -= 1;
      lt += 1;
    } else {
      answer += 1;
      rt -= 1;
    }
  }

  return answer;
}

console.log(solution([90, 50, 70, 100, 60], 140));
