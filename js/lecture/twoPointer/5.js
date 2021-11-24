function solution(nums, m) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];

    while (sum > m) {
      sum -= nums[lt];
      lt += 1;
    }
    answer += rt - lt + 1;
  }

  return answer;
}

console.log(solution([1, 1, 2, 2, 1, 2, 1, 3, 2], 5));
