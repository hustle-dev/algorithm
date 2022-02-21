const solution = (nums, k) => {
  const m = new Map();
  const answer = [];

  let lt = 0;
  let rt = 0;

  while (rt < nums.length) {
    m.set(nums[rt], m.get(nums[rt]) + 1 || 1);

    if (rt - lt === k - 1) {
      answer.push(m.size);
      if (m.get(nums[lt]) === 1) {
        m.delete(nums[lt]);
      } else {
        m.set(nums[lt], m.get(nums[lt]) - 1);
      }
      lt++;
    }

    rt++;
  }

  return answer;
};

console.log(solution([20, 12, 20, 10, 23, 17, 10], 4));
console.log(solution([1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3));
