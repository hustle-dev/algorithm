function solution(nums, k) {
  let answer = 0;
  let lt = 0;
  let cnt = 0;

  for (rt = 0; rt < nums.length; rt++) {
    if (nums[rt] === 0) cnt++;

    while (cnt > k) {
      if (nums[lt] === 0) cnt--;
      lt++;
    }
    answer = Math.max(answer, rt - lt + 1);
  }

  return answer;
}

console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2));
