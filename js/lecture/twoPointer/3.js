function solution(nums, m) {
  let answer = 0;
  let sum = 0;
  let lt = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === m) {
      answer += 1;
    }

    if (sum > m) {
      while (sum > m) {
        sum -= nums[lt];
        lt += 1;
      }
      if (sum === m) {
        answer += 1;
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 1, 2, 1, 2, 1], 3));
