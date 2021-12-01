function solution(nums, m) {
  let answer = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    answer += parseInt(m / nums[i]);
    m = m % nums[i];
  }

  return answer;
}

console.log(solution([1, 5, 10], 15));
