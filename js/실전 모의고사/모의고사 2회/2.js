const solution = nums => {
  let answer = 0;
  let diff = nums[1] - nums[0];
  let lt = 0;

  for (let rt = 2; rt < nums.length; rt++) {
    if (nums[rt] - nums[rt - 1] === diff) {
      answer += rt - lt - 1;
    } else {
      diff = nums[rt] - nums[rt - 1];
      lt = rt - 1;
    }
  }
  return answer;
};

console.log(solution([1, 2, 3, 5, 7, 6, 5, 4]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 7, 8, 9]));
