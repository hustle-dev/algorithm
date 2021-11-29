const solution = nums => {
  if (nums.length < 3) return 0;
  let lt = 0;
  let cnt = 0;
  let dif = nums[1] - nums[0];

  for (let rt = 2; rt < nums.length; rt++) {
    if (nums[rt] - nums[rt - 1] !== dif) {
      while (rt - lt !== 1) {
        lt++;
      }

      dif = nums[rt] - nums[rt - 1];
    }

    if (rt - lt + 1 >= 3) cnt += rt - lt - 1;
  }

  return cnt;
};

console.log(solution([1, 2, 3, 5, 7, 6, 5, 4]));
console.log(solution([1, 2, 3, 7, 8, 9]));
console.log(solution([1, 2, 3, 4, 5]));
