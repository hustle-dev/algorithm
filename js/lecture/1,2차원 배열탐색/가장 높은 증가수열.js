function solution(nums) {
  let answer = 0;
  let minValue;

  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i] < nums[i + 1]) {
      minValue = nums[i];
      i++;
      while (nums[i] < nums[i + 1] && i < nums.length - 1) {
        i++;
      }
      answer = Math.max(answer, nums[i] - minValue);
    } else {
      i++;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
